import React from "react";
import { AuthLayout } from "../layouts";
import { Button, Input, Text } from "../components";
import { FormikErrors, useFormik } from "formik";

interface Props {}

interface formValuesI {
	email: string;
	password: string;
}

const validate = (val: formValuesI) => {
	console.log("validation");
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
	const handleSignin = () => {};
	const handleSignupLink = () => {};

	const formik = useFormik({
		initialValues,
		validate,
		onSubmit: val => {
			console.log(formik.errors);
		},
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
					<Button form="loginForm" type="submit" handleClick={handleSignin}>
						Text
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
