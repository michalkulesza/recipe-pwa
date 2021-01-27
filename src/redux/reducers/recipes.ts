import { SET_FEATURED_RECIPES, SET_RECENTLY_ADDED_RECIPES, SET_LAST_USED_RECIPES } from "../types/recipes";
import { recipesState, recipesTypes } from "../types/recipes";

const initState: recipesState = {
	featured: {
		category: "",
		recipes: [],
	},
	recentlyAdded: [],
	lastUsed: [],
};

const recipes = (state = initState, action: recipesTypes) => {
	switch (action.type) {
		case SET_FEATURED_RECIPES:
			return { ...state, featured: action.payload };
		case SET_RECENTLY_ADDED_RECIPES:
			return { ...state, recentlyAdded: action.payload };
		case SET_LAST_USED_RECIPES:
			return { ...state, lastUsed: action.payload };
		default:
			return state;
	}
};

export default recipes;
