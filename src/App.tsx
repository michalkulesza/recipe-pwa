import React from "react";
import { ADD, BROWSE, HOME, RECIPE, SETTINGS, SIGN_CONFIRM, SIGN_IN, SIGN_UP } from "./constants/routes";
import { ProtectedRoute, RedirectIfUser } from "./helpers/protectedRoute";
import { RootState } from "./redux/reducers/rootReducer";
import { useAuthChange, useScreen } from "./hooks";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

import { Signin, Signup, ConfirmSignup, Page404, Home, Recipe } from "./screens";
import { BottomNavbarLayout } from "./layouts";
import { Text } from "./components";

const Container = styled.div``;

const App: React.FC = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	const screen = useScreen();
	useAuthChange();

	return (
		<Container style={{ height: screen?.height }}>
			<Switch>
				<RedirectIfUser exact trigger={user} path={SIGN_IN} redirectTo={HOME}>
					<Signin />
				</RedirectIfUser>
				<RedirectIfUser exact trigger={user} path={SIGN_UP} redirectTo={HOME}>
					<Signup />
				</RedirectIfUser>
				<RedirectIfUser exact trigger={user} path={SIGN_CONFIRM} redirectTo={HOME}>
					<ConfirmSignup />
				</RedirectIfUser>
				<ProtectedRoute exact trigger={user} path={HOME} redirectTo={SIGN_IN}>
					<BottomNavbarLayout>
						<Home />
					</BottomNavbarLayout>
				</ProtectedRoute>
				<ProtectedRoute exact trigger={user} path={ADD} redirectTo={SIGN_IN}>
					<BottomNavbarLayout>
						<Text type="H1Bold">ADD</Text>
					</BottomNavbarLayout>
				</ProtectedRoute>
				<ProtectedRoute exact trigger={user} path={BROWSE} redirectTo={SIGN_IN}>
					<BottomNavbarLayout>
						<Text type="H1Bold">BROWSE</Text>
					</BottomNavbarLayout>
				</ProtectedRoute>
				<ProtectedRoute exact trigger={user} path={RECIPE} redirectTo={SIGN_IN}>
					<BottomNavbarLayout>
						<Recipe />
					</BottomNavbarLayout>
				</ProtectedRoute>
				<ProtectedRoute exact trigger={user} path={SETTINGS} redirectTo={SIGN_IN}>
					<BottomNavbarLayout>
						<Text type="H1Bold">SETTINGS</Text>
					</BottomNavbarLayout>
				</ProtectedRoute>
				<Route render={() => <Page404 />} />
			</Switch>
		</Container>
	);
};

export default App;
