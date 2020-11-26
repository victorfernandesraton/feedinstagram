import { dispatchTypes } from "./Comment-constants";

const initialMetadata = {
	page: 0,
	limit: 0,
	total: 0,
};

export const initialState = {
	loading: false,
	called: false,
	data: [],
	error: null,
	metadata: { ...initialMetadata },
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case dispatchTypes.LOADING:
			return { ...state, loading: true };
		case dispatchTypes.SUCESS:
		case dispatchTypes.CREATED:
			return {
				...state,
				...payload,
				error: null,
				loading: false,
				called: true,
				metadata: { ...state.metadata, ...payload.metadata },
				data: [...state.data, ...payload.data],
			};

		case dispatchTypes.ERROR:
			return {
				...state,
				called: true,
				loading: false,
				error: payload.error,
			};
		case dispatchTypes.RESET:
			return { ...initialState };
		default:
			return state;
	}
};
