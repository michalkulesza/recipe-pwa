import { SET_LOADING, SET_USER, CLEAR_USER, UserI } from "../types/auth";

import { Auth } from "aws-amplify";
import { setError } from "./ui";

export const setAuthLoading = (bool: boolean) => {
	return {
		type: SET_LOADING,
		payload: bool,
	};
};

export const loginUser = (username: string, password: string) => {
	return async (dispatch: any) => {
		dispatch(setAuthLoading(true));

		try {
			await Auth.signIn({
				username,
				password,
			});
		} catch (error) {
			dispatch(setError(error.message));
		}

		dispatch(setAuthLoading(false));
	};
};

export const signUpUser = (name: string, username: string, password: string, callback: () => void) => {
	return async (dispatch: any) => {
		dispatch(setAuthLoading(true));

		try {
			await Auth.signUp({
				username,
				password,
				attributes: {
					name,
				},
			});
		} catch (error) {
			dispatch(setError(error.message));
		}

		callback();
		dispatch(setAuthLoading(false));
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
