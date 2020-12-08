import { apiMock } from "../../utils/request";
import { dispatchTypes } from "./Like-constants";

export const fetchLike = (typedispatch) => async (
	dispatch,
	{ publicationId, userId, page, limit, total, loading }
) => {
	if (loading) return;
	dispatch({
		type: typedispatch.LOADING,
	});
	if (total == page * limit) return;

	let url = `/likes?page=${page}&limit=${limit}&post=${publicationId}`;
	if (userId) {
		url = `${url}&author=${userId}`;
	}

	try {
		const response = await apiMock.get(url);

		const data = response.data.items;
		const totalItems = response.data.count;
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

export const createLike = (typedispatch) => async (
	dispatch,
	{ publicationId, userId, total, loading }
) => {
	if (loading) return;
	dispatch({
		type: typedispatch.LOADING,
	});
	const url = `/likes`;
	try {
		const request = await apiMock.post(url, {
			author: userId,
			post: publicationId,
		});
		dispatch({
			type: typedispatch.SUCESS,
			payload: {
				data: [request.data],
				metadata: {
					total: total + 1,
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

export const getLike = fetchLike({
	SUCESS: dispatchTypes.SUCESS,
	ERROR: dispatchTypes.ERROR,
	LOADING: dispatchTypes.LOADING,
});

export const postLike = createLike({
	SUCESS: dispatchTypes.SUCESS,
	ERROR: dispatchTypes.ERROR,
	LOADING: dispatchTypes.LOADING,
});
