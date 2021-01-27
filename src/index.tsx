import React from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import "normalize.css";

import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
