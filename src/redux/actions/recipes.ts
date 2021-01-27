import {
	setFeaturedRecipesAction,
	setLastUsedRecipesAction,
	setRecentlyAddedRecipesAction,
	SET_FEATURED_RECIPES,
	SET_LAST_USED_RECIPES,
	SET_RECENTLY_ADDED_RECIPES,
} from "../types/recipes";

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
