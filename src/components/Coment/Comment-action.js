import { apiMock } from "../../utils/request";
import { defaultCommentData, dispatchTypes } from "./Comment-constants";

export const fetchPost = async (
	dispatch,
	{ page, limit, loading, total, parentId, params }
) => {
	if (loading || total == page * limit) return;

	dispatch({
		type: dispatchTypes.LOADING,
	});

	let url = `/post?page=${page}&limit=${limit}&parent=${parentId}`;

	if (params?.authorId) {
		url = `${url}&author=${params.authorId}`;
	}

	try {
		const response = await apiMock.get(url);

		const data = response.data.items;
		const totalItems = response.data.total;
		dispatch({
			type: dispatchTypes.SUCESS,
			payload: {
				data: data,
				metadata: {
					page: data.length == 0 ? page : page + 1,
					total: totalItems,
					limit: limit,
				},
			},
		});
	} catch (error) {
		dispatch({
			type: dispatchTypes.ERROR,
			payload: { error },
		});
	}
};

export const postComment = async (dispatch, { author, content, parent }) => {
	const sendData = {
		...defaultCommentData,
		description: content,
		author: author?.id,
		parent: parent?.id,
	};

	if (!author || !parent) {
		dispatch({
			type: dispatchTypes.ERROR,
			payload: { error: { message: "Invalid args" } },
		});
	}

	const url = "/post";

	try {
		const response = await apiMock.post(url, sendData);
		return response.data;
	} catch (error) {
		dispatch({
			type: dispatchTypes.ERROR,
			payload: { error },
		});
	}
};

export const addComment = (dispatch, { data, total }) => {
	dispatch({
		type: dispatchTypes.CREATED,
		payload: { data: [data], metadata: { total: total + 1 } },
	});
};
