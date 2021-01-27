import { CLEAR_ERROR, SET_ERROR, uiState, uiTypes } from "../types/ui";

const initState: uiState = {
	error: null,
};

const ui = (state = initState, action: uiTypes) => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, error: action.payload };
		case CLEAR_ERROR:
			return { ...state, error: initState.error };
		default:
			return state;
	}
};

export default ui;
