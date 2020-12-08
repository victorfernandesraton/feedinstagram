import { dispatchTypes } from "./Like-constants";

const initialMetadata = {
	page: 0,
	limit: 0,
	total: 0,
};
export const initialState = {
	loading: false,
	refreshing: false,
	called: false,
	data: [],
	error: null,
	metadata: { ...initialMetadata },
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case dispatchTypes.LOADING:
			return { ...state, loading: true };
		case dispatchTypes.SUCESS: {
			return {
				...state,
				...payload,
				error: null,
				loading: false,
				refreshing: false,
				called: true,
				data: [...state.data, ...payload.data],
			};
		}
		case dispatchTypes.ERROR:
			return {
				...state,
				called: true,
				loading: false,
				refreshing: false,
				error: payload.error,
			};
		default:
			return state;
	}
};
