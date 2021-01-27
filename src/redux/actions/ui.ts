import { CLEAR_ERROR, SET_ERROR } from "../types/ui";
// import { showMessage } from "react-native-flash-message";

export const setError = (error: string) => {
	return async (dispatch: any) => {
		dispatch({
			type: CLEAR_ERROR,
		});

		dispatch({
			type: SET_ERROR,
			payload: error,
		});

		// showMessage({
		// 	message: error,
		// });

		setTimeout(() => {
			dispatch({
				type: CLEAR_ERROR,
			});
		}, 3000);
	};
};
