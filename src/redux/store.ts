import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//Make DEVTOOLS work with TS
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const persistConfig = {
	key: "root",
	storage,
};

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = composeEnhancers(applyMiddleware(thunk));

const configureStore = (initialState: {}) => {
	const store = createStore(persistedReducer, initialState, enhancer);
	const persistor = persistStore(store);
	return { store, persistor };
};

const { store, persistor } = configureStore(initialState);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
