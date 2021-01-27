import React from "react";
import { ProtectedRoute, RedirectIfUser } from "./helpers/protectedRoute";
import { HOME, SIGN_IN, SIGN_UP } from "./constants/routes";
import styled from "styled-components/macro";
import { Switch } from "react-router-dom";
import { useScreen } from "./hooks";

import { Signin } from "./screens";

const auth = false;

const Container = styled.div``;

const App: React.FC = () => {
	const screen = useScreen();

	return (
		<Container style={{ height: screen?.height }}>
			<Switch>
				<RedirectIfUser trigger={auth} path={SIGN_IN} redirectTo={HOME}>
					<Signin />
				</RedirectIfUser>
				<RedirectIfUser trigger={auth} path={SIGN_UP} redirectTo={HOME}>
					<h1>SIGNUP</h1>
				</RedirectIfUser>
				<ProtectedRoute trigger={auth} path={HOME} redirectTo={SIGN_IN}>
					<h1>AUTHED</h1>
				</ProtectedRoute>
			</Switch>
		</Container>
	);
};

export default App;
