import React from "react";
import { Authenticated, Unauthenticated } from "./views";

const auth = false;

const App: React.FC = () => {
	return auth ? <Authenticated /> : <Unauthenticated />;
};

export default App;
