import React from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./globalStyles";
import ReactDOM from "react-dom";
import "normalize.css";

import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles>
			<App />
		</GlobalStyles>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
