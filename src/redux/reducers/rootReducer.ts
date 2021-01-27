import { combineReducers } from "redux";

import auth from "./auth";
import recipes from "./recipes";
import ui from "./ui";

const rootReducer = combineReducers({
	auth,
	recipes,
	ui,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
