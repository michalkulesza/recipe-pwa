export const SET_LOADING = "SET_LOADING";
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export interface authState {
	loading: boolean;
	user: UserI | null;
}

export interface UserI {
	sub: string;
	email_verified: boolean;
	name: string;
	email: string;
}

export interface toggleLoadingAction {
	type: typeof SET_LOADING;
	payload: boolean;
}

export interface setUserAction {
	type: typeof SET_USER;
	payload: UserI;
}

export interface clearUserAction {
	type: typeof CLEAR_USER;
}

export type authTypes = toggleLoadingAction | setUserAction | clearUserAction;
