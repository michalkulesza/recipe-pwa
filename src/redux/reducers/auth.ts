import { SET_LOADING, SET_USER, CLEAR_USER } from "../types/auth";
import { authState, authTypes } from "../types/auth";

const initState: authState = {
	loading: false,
	user: null,
};

const auth = (state = initState, action: authTypes) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case SET_USER:
			return { ...state, user: action.payload };
		case CLEAR_USER:
			return { ...state, user: initState.user };
		default:
			return state;
	}
};

export default auth;
