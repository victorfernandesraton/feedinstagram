import { apiMock } from "../../utils/request";
import { dispatchTypes } from "./Like-constants";

export const fetchLike = (typedispatch) => async (
	dispatch,
	{ publicationId, page, limit, total, loading, pagination = false }
) => {
	if (loading) return;
	dispatch({
		type: typedispatch.LOADING,
	});
	if (total == page * limit) return;

	let url = `/likes?post=${publicationId}`;
	if (pagination) {
		url = `${url}&page=${page}&limit=${limit}`;
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
		console.warn(url);
		console.log(error);
		dispatch({
			type: typedispatch.ERROR,
			payload: { error },
		});
	}
};

export const createLike = (typedispatch) => async (
	dispatch,
	{ publicationId, user, total, loading }
) => {
	if (loading) return;
	dispatch({
		type: typedispatch.LOADING,
	});
	const url = `/likes`;
	try {
		const request = await apiMock.post(url, {
			author: { name: user?.name, avatar: user?.avatar, id: user?.id },
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
		console.warn(url);
		console.log(error);
		dispatch({
			type: typedispatch.ERROR,
			payload: { error },
		});
	}
};
export const deleteLike = (typedispatch) => async (
	dispatch,
	{ id, total, loading }
) => {
	if (loading) return;
	dispatch({
		type: typedispatch.LOADING,
	});
	const url = `/likes/${id}`;
	try {
		const request = await apiMock.delete(url);
		dispatch({
			type: typedispatch.SUCESS,
			payload: {
				id: request.data.id,
				metadata: {
					total: total + 1,
				},
			},
		});
	} catch (error) {
		console.warn(url);
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

export const disLike = deleteLike({
	SUCESS: dispatchTypes.DELETE,
	ERROR: dispatchTypes.ERROR,
	LOADING: dispatchTypes.LOADING,
});
