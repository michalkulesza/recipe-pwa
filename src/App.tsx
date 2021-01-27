import React from "react";
import { ProtectedRoute, RedirectIfUser } from "./helpers/protectedRoute";
import { HOME, SIGN_CONFIRM, SIGN_IN, SIGN_UP } from "./constants/routes";
import { RootState } from "./redux/reducers/rootReducer";
import { useAuthChange, useScreen } from "./hooks";
import styled from "styled-components/macro";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { Signin, Signup, ConfirmSignup } from "./screens";

const Container = styled.div``;

const App: React.FC = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	const screen = useScreen();
	useAuthChange();

	return (
		<Container style={{ height: screen?.height }}>
			<Switch>
				<RedirectIfUser trigger={user} path={SIGN_IN} redirectTo={HOME}>
					<Signin />
				</RedirectIfUser>
				<RedirectIfUser trigger={user} path={SIGN_UP} redirectTo={HOME}>
					<Signup />
				</RedirectIfUser>
				<RedirectIfUser trigger={user} path={SIGN_CONFIRM} redirectTo={HOME}>
					<ConfirmSignup />
				</RedirectIfUser>
				<ProtectedRoute trigger={user} path={HOME} redirectTo={SIGN_IN}>
					<h1>AUTHED</h1>
				</ProtectedRoute>
			</Switch>
		</Container>
	);
};

export default App;
