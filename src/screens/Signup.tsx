import React from "react";
import { SIGN_CONFIRM, SIGN_IN } from "../constants/routes";
import { signUpUser } from "../redux/actions/auth";
import { FormikErrors, useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, Input, Text } from "../components";
import { AuthLayout } from "../layouts";

interface Props {}

interface formValuesI {
	name: string;
	email: string;
	password: string;
	password2: string;
}

const validate = (val: formValuesI) => {
	let errors: FormikErrors<formValuesI> = {};

	if (!val.name) {
		errors.name = "Name is required";
	} else if (val.name.length < 3) {
		errors.name = "Name must be at least 3 characters long.";
	}

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

	if (!val.password2) {
		errors.password2 = "Please confirm your password.";
	} else if (val.password2.length < 5) {
		errors.password2 = "Password must be at least 5 characters long.";
	} else if (val.password !== val.password2) {
		errors.password2 = "Password must match.";
	}

	return errors;
};

const initialValues: formValuesI = {
	name: "",
	email: "",
	password: "",
	password2: "",
};

const Signup: React.FC<Props> = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSigninLink = () => history.push(SIGN_IN);

	const formik = useFormik({
		initialValues,
		validate,
		onSubmit: async val => dispatch(signUpUser(val.name, val.email, val.password2, () => history.push(SIGN_CONFIRM))),
	});

	return (
		<AuthLayout
			top={
				<>
					<Text type="H1Bold">New account?</Text>
					<Text type="H1">Let's get you started!</Text>
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
						placeholder="Name"
						name="name"
						value={formik.values.name}
						onChange={formik.handleChange}
						error={formik.errors.name}
					/>
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
					<Input
						styling="underline"
						placeholder="Confirm Password"
						name="password2"
						value={formik.values.password2}
						onChange={formik.handleChange}
						type="password"
						error={formik.errors.password2}
					/>
				</form>
			}
			bottom={
				<>
					<Button
						form="loginForm"
						type="submit"
						disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
						loading={formik.isSubmitting}
					>
						Sign up
					</Button>
					<Button styling="clear" handleClick={handleSigninLink}>
						<Text type="H3" color="placeholder">
							Already have an account? Sign in here.
						</Text>
					</Button>
				</>
			}
		/>
	);
};

export default Signup;
