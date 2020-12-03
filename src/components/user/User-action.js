import { apiMock } from "../../utils/request"
import { dispatchTypes } from "./User-constants";

export const getUser = typedispatch => async (dispacth, {id}) => {
	dispacth({
		type: typedispatch.LOADING
	})
	let url = `/user`
	if (id) {
		url = `${url}?id=${id}`
	}

	try {
		const {data} = await apiMock.get(url);
		dispacth({
			type: typedispatch.SUCESS,
			payload: {user: {...data?.items?.[0]}}
		})
	} catch (error) {
		console.log(error)
		dispacth({
			type:typedispatch.ERRO,
			payload: {error},
		})
	}
}

export const fetchUser = getUser({
	SUCESS: dispatchTypes.SUCESS,
	LOADING: dispatchTypes.LOADING,
	ERRO: dispatchTypes.ERRO
})