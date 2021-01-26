import React from "react";
import { AuthLayout } from "../layouts";
import { Input, Text } from "../components";

interface Props {}

const Signin: React.FC<Props> = () => {
	return (
		<AuthLayout
			top={
				<>
					<Text type="H1Bold">Hello!</Text>
					<Text type="H1">Let's sign in.</Text>
				</>
			}
			content={
				<>
					<Input styling="underline" placeholder="E-mail" />
					<Input styling="underline" placeholder="Password" />
				</>
			}
			bottom={<Text>Bttom</Text>}
		/>
	);
};

export default Signin;
