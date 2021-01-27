import React from "react";
import { Route, Redirect } from "react-router-dom";

interface PropsI {
	trigger: any;
	redirectTo: string;
	children: React.ReactNode;
	path: string;
}

export const RedirectIfUser = ({ trigger, path, redirectTo, children }: PropsI) => (
	<Route
		exact
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

export const ProtectedRoute = ({ trigger, path, redirectTo, children }: PropsI) => (
	<Route
		exact
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
