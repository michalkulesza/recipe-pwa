import React from "react";
import { FormikErrors, useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { SIGN_UP } from "../constants/routes";
import { useDispatch } from "react-redux";

import { Button, Input, Text } from "../components";
import { AuthLayout } from "../layouts";
import { loginUser } from "../redux/actions/auth";

interface Props {}

interface formValuesI {
	email: string;
	password: string;
}

const validate = (val: formValuesI) => {
	let errors: FormikErrors<formValuesI> = {};

	if (!val.email) {
		errors.email = "Email is required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
		errors.email = "Email is incorrect";
	}

	if (!val.password) {
		errors.password = "Password is required";
	} else if (val.password.length < 5) {
		errors.password = "Password must be at least 5 characters long.";
	}

	return errors;
};

const initialValues: formValuesI = {
	email: "",
	password: "",
};

const Signin: React.FC<Props> = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSignupLink = () => history.push(SIGN_UP);

	const formik = useFormik({
		initialValues,
		validate,
		onSubmit: async val => dispatch(loginUser(val.email, val.password)),
	});

	return (
		<AuthLayout
			top={
				<>
					<Text type="H1Bold">Hello!</Text>
					<Text type="H1">Let's sign in.</Text>
				</>
			}
			content={
				<form
					id="loginForm"
					onSubmit={formik.handleSubmit}
					style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
				>
					<Input
						styling="underline"
						placeholder="E-mail"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						type="email"
						error={formik.errors.email}
					/>
					<Input
						styling="underline"
						placeholder="Password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						type="password"
						error={formik.errors.password}
					/>
				</form>
			}
			bottom={
				<>
					<Button form="loginForm" type="submit">
						Sign in
					</Button>
					<Button styling="clear" handleClick={handleSignupLink}>
						<Text type="H3" color="placeholder">
							Don't have an account yet? Sign up here.
						</Text>
					</Button>
				</>
			}
		/>
	);
};

export default Signin;
