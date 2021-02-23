export const SET_FEATURED_RECIPES = "SET_FEATURED_RECIPES";
export const SET_RECENTLY_ADDED_RECIPES = "SET_RECENTLY_ADDED_RECIPES";
export const SET_LAST_USED_RECIPES = "SET_LAST_USED_RECIPES";

export interface recipesState {
	featured: FeaturedRecipesI;
	recentlyAdded: RecipeI[];
	lastUsed: RecipeI[];
}

export interface RecipeI {
	id: string;
	imageURL: string;
	name: string;
	prepTime: number;
	tags: string[];
	category: string;
}

export interface FeaturedRecipesI {
	breakfast?: RecipeI[];
	lunch?: RecipeI[];
	dinner?: RecipeI[];
}

export interface setFeaturedRecipesAction {
	type: typeof SET_FEATURED_RECIPES;
	payload: FeaturedRecipesI;
}

export interface setRecentlyAddedRecipesAction {
	type: typeof SET_RECENTLY_ADDED_RECIPES;
	payload: RecipeI[];
}

export interface setLastUsedRecipesAction {
	type: typeof SET_LAST_USED_RECIPES;
	payload: RecipeI[];
}

export type recipesTypes = setFeaturedRecipesAction | setRecentlyAddedRecipesAction | setLastUsedRecipesAction;
