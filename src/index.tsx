import React from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { PersistGate } from "redux-persist/integration/react";
import ReactNotification from "react-notifications-component";
import { BrowserRouter as Router } from "react-router-dom";
import "react-notifications-component/dist/theme.css";
import GlobalStyles from "./styles/globalStyles";
import reportWebVitals from "./reportWebVitals";
import awsConfig from "./aws-exports";
import persistedStore from "./redux/store";
import { Provider } from "react-redux";
import Amplify from "aws-amplify";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";

Amplify.configure(awsConfig);
const { store, persistor } = persistedStore;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<h1>LOADING</h1>}>
				<ReactNotification />
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
