import axios from 'axios';
import { dispatchTypes } from "./Feed-constants"
export const fetchPost = async (dispatch, {page, limit, loading, total, params}) => {
	if (loading || total == page *limit) return
	dispatch({
		type: dispatchTypes.LOADING
	})

	let url = `https://5fbc585cc09c200016d419e5.mockapi.io/instagram-clone/post?page=${page}&limit=${limit}`;
	if (params?.feedId) {
		url = `${url}&parent=${params.feedId}&type=comment`
	} else {
		url = `${url}&type=publication`
	}
	
	if (params?.authorId) {
		url = `${url}&author=${params.authorId}`
	}

	try {
		const response = await axios.get(url);

		const data = response.data.items;
		const totalItems = response.data.total;
		dispatch({
			type: dispatchTypes.SUCESS,
			payload: {
				data: data,
				metadata: {
					page: data.length  == 0 ? page : page + 1,
					total: totalItems,
					limit: limit
				}
			}
		})
	} catch (error) {
		console.log(error)
		dispatch({
			type: dispatchTypes.ERROR,
			payload: {error}
		})
	}
}
