import React, { useState } from "react";
import { AuthLayout } from "../layouts";
import { Button, Input, Text } from "../components";
import { InputsT } from "../components/Input/Input";

interface Props {}

const Signin: React.FC<Props> = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignin = () => {};
	const handleSignupLink = () => {};

	const handleSubmit = (data: any) => console.log(data);

	const handleChangeEmail = (e: InputsT) => setEmail(e.target.value);
	const handleChangePassword = (e: InputsT) => setPassword(e.target.value);

	return (
		<AuthLayout
			top={
				<>
					<Text type="H1Bold">Hello!</Text>
					<Text type="H1">Let's sign in.</Text>
				</>
			}
			content={
				<form id="loginForm" onSubmit={handleSubmit}>
					<Input styling="underline" placeholder="E-mail" name="email" value={email} onChange={handleChangeEmail} />
					<Input
						styling="underline"
						placeholder="Password"
						name="password"
						value={password}
						onChange={handleChangePassword}
					/>
				</form>
			}
			bottom={
				<>
					<Button form="loginForm" type="submit" handleClick={handleSignin}>
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
