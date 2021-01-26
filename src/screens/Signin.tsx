import React from "react";
import { AuthLayout } from "../layouts";
import { Text } from "../components";

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
			content={<Text>Lol</Text>}
			bottom={<Text>Bttom</Text>}
		/>
	);
};

export default Signin;
