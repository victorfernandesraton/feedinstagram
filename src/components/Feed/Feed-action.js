import { apiMock } from "../../utils/request";
import { dispatchTypes } from "./Feed-constants";
export const fetchPost = (typedispatch) => async (
	dispatch,
	{ page, limit, loading, total, params = {} }
) => {
	if (loading) return;
	dispatch({
		type: typedispatch.LOADING,
	});
	if (total == page * limit) return;

	let url = `/post?page=${page}&limit=${limit}`;

	if (params?.feedId) {
		url = `${url}&id=${params.feedId}`;
	}

	if (params?.type) {
		url = `${url}&type=${params.type}`;
	} else {
		url = `${url}&type=publication`;
	}

	if (params?.authorId) {
		url = `${url}&author=${params.authorId}`;
	}

	try {
		const response = await apiMock.get(url);

		const data = response.data.items;
		const totalItems = response.data.total;
		dispatch({
			type: typedispatch.SUCESS,
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
		console.log(error);
		dispatch({
			type: typedispatch.ERROR,
			payload: { error },
		});
	}
};

export const getPost = fetchPost({
	SUCESS: dispatchTypes.SUCESS,
	ERROR: dispatchTypes.ERROR,
	LOADING: dispatchTypes.LOADING,
});
