import React, { useEffect } from "react";
import { ADD, BROWSE, HOME, RECIPE, SETTINGS, SIGN_CONFIRM, SIGN_IN, SIGN_UP } from "./constants/routes";
import { ProtectedRoute, RedirectIfUser } from "./helpers/protectedRoute";
import { RootState } from "./redux/reducers/rootReducer";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { useAuthChange } from "./hooks";

import { Signin, Signup, ConfirmSignup, Page404, Home, Recipe, Add, Browse } from "./screens";
import { BottomNavbarLayout } from "./layouts";
import { Text } from "./components";
import { getHours } from "./hooks/useGreeting";

const Container = styled.div`
	width: 100%;
	height: -webkit-fill-available;
	height: 100vh;
`;

const App: React.FC = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	const hour = getHours();
	useAuthChange();

	useEffect(() => {}, []);

	return (
		<Container>
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
						<Add />
					</BottomNavbarLayout>
				</ProtectedRoute>
				<ProtectedRoute exact trigger={user} path={BROWSE} redirectTo={SIGN_IN}>
					<BottomNavbarLayout>
						<Browse />
					</BottomNavbarLayout>
				</ProtectedRoute>
				<ProtectedRoute exact trigger={user} path={`${RECIPE}/:id`} redirectTo={SIGN_IN}>
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
