import { CLEAR_ERROR, SET_ERROR } from "../types/ui";
import { store } from "react-notifications-component";

export const setError = (error: string) => {
	return async (dispatch: any) => {
		dispatch({
			type: CLEAR_ERROR,
		});

		dispatch({
			type: SET_ERROR,
			payload: error,
		});

		store.addNotification({
			container: "bottom-center",
			message: error,
			title: "Whoops!",
			type: "danger",
			dismiss: {
				duration: 3000,
			},
		});

		setTimeout(() => {
			dispatch({
				type: CLEAR_ERROR,
			});
		}, 3000);
	};
};
