import axios from 'axios';
import { dispatchTypes } from "./Feed-constants"
export const fetchPost = async (dispatch, {page, limit, loading, total}) => {
	if (loading || total == page *limit) return
	dispatch({
		type: dispatchTypes.LOADING
	})

	try {
		const response = await axios.get(
			`https://5fbc585cc09c200016d419e5.mockapi.io/instagram-clone/post?page=${page}&limit=${limit}`
		);

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
		dispatch({
			type: dispatchTypes.ERROR,
			payload: {error}
		})
	}
}
