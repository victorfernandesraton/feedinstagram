import { dispatchTypes } from "./User-constants";

export const initialState = {
	laoding: false,
	user: null,
	called: false,
	error: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case dispatchTypes.LOADING:
			return { ...state, laoding: true };
		case dispatchTypes.SUCESS:
			return { ...state, called: true, loading: false, user: payload?.user };
		case dispatchTypes.ERRO:
			return { ...state, error: payload?.error, called: true, laoding: false };
		default:
			return state;
	}
};
