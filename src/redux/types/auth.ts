export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export interface authState {
	user: UserI | null;
}

export interface UserI {
	sub: string;
	email_verified: boolean;
	name: string;
	email: string;
}

export interface setUserAction {
	type: typeof SET_USER;
	payload: UserI;
}

export interface clearUserAction {
	type: typeof CLEAR_USER;
}

export type authTypes = setUserAction | clearUserAction;
