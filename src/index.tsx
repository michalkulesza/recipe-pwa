import React from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import reportWebVitals from "./reportWebVitals";
import awsConfig from "./aws-exports";
import persistedStore from "./redux/store";
import { Provider } from "react-redux";
import Amplify from "aws-amplify";
import ReactDOM from "react-dom";
import "normalize.css";

import App from "./App";

Amplify.configure(awsConfig);
const { store, persistor } = persistedStore;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<h1>LOADING</h1>}>
				<GlobalStyles />
				<Router>
					<App />
				</Router>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
