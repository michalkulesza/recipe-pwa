import { gql } from "@apollo/client";
import client from "../../config/apollo";
import {
	setFeaturedRecipesAction,
	setLastUsedRecipesAction,
	setRecentlyAddedRecipesAction,
	SET_FEATURED_RECIPES,
	SET_LAST_USED_RECIPES,
	SET_RECENTLY_ADDED_RECIPES,
} from "../types/recipes";
import { setError } from "./ui";

export const setFeaturedRecipes = (recipes: setFeaturedRecipesAction["payload"]) => {
	return {
		type: SET_FEATURED_RECIPES,
		payload: recipes,
	};
};

export const setLastUsedRecipes = (recipes: setLastUsedRecipesAction["payload"]) => {
	return {
		type: SET_LAST_USED_RECIPES,
		payload: recipes,
	};
};

export const setRecentlyAddedRecipes = (recipes: setRecentlyAddedRecipesAction["payload"]) => {
	return {
		type: SET_RECENTLY_ADDED_RECIPES,
		payload: recipes,
	};
};

export const getFeaturedRecipes = () => {};

export const initialDataLoad = (userId: string, hour: number) => {
	return async (dispatch: any) => {
		try {
			if (hour > 3 && hour <= 12) {
				// client.query({
				// 	query: gql`
				// 		query
				// 	`
				// })
			} else if (hour > 12 && hour <= 16) {
				//lunch
			} else {
				//dinner
			}
		} catch (error) {
			dispatch(setError(error.message));
		}
	};
};
