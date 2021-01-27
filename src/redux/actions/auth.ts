import { SET_USER, CLEAR_USER, UserI } from "../types/auth";

import { Auth } from "aws-amplify";
import { setError } from "./ui";

export const loginUser = (username: string, password: string) => {
	return async (dispatch: any) => {
		try {
			await Auth.signIn({
				username,
				password,
			});
		} catch (error) {
			dispatch(setError(error.message));
		}
	};
};

export const signUpUser = (name: string, username: string, password: string, callback: () => void) => {
	return async (dispatch: any) => {
		try {
			await Auth.signUp({
				username,
				password,
				attributes: {
					name,
				},
			});
			callback();
		} catch (error) {
			dispatch(setError(error.message));
		}
	};
};

export const setUser = (data: UserI) => {
	return {
		type: SET_USER,
		payload: data,
	};
};

export const clearUser = () => {
	return {
		type: CLEAR_USER,
	};
};
