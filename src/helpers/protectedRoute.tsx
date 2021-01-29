import React from "react";
import { Route, Redirect } from "react-router-dom";

interface PropsI {
	trigger: any;
	redirectTo: string;
	children: React.ReactNode;
	path: string;
	exact?: boolean;
}

export const RedirectIfUser = ({ exact = false, trigger, path, redirectTo, children }: PropsI) => (
	<Route
		exact={exact}
		path={path}
		render={({ location }) => {
			return trigger ? (
				<Redirect
					to={{
						pathname: redirectTo,
						state: { from: location },
					}}
				/>
			) : (
				children
			);
		}}
	/>
);

export const ProtectedRoute = ({ exact = false, trigger, path, redirectTo, children }: PropsI) => (
	<Route
		exact={exact}
		path={path}
		render={({ location }) => {
			return trigger ? (
				children
			) : (
				<Redirect
					to={{
						pathname: redirectTo,
						state: { from: location },
					}}
				/>
			);
		}}
	/>
);
