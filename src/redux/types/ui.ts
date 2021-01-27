export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export interface uiState {
	error: null | string;
}

export interface setErrorAction {
	type: typeof SET_ERROR;
	payload: string;
}

export interface clearErrorAction {
	type: typeof CLEAR_ERROR;
}

export type uiTypes = setErrorAction | clearErrorAction;
