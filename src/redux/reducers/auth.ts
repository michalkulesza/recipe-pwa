import { SET_USER, CLEAR_USER } from "../types/auth";
import { authState, authTypes } from "../types/auth";

const initState: authState = {
	user: null,
};

const auth = (state = initState, action: authTypes) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.payload };
		case CLEAR_USER:
			return { ...state, user: initState.user };
		default:
			return state;
	}
};

export default auth;
