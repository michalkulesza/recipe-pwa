import React from "react";
import { useHistory } from "react-router-dom";
import { SIGN_IN } from "../constants/routes";
import { Text, Button } from "../components";
import { AuthLayout } from "../layouts";

type PropsI = {};

const ConfirmSignup: React.FC<PropsI> = () => {
	const history = useHistory();
	const handleButton = () => history.push(SIGN_IN);

	return (
		<AuthLayout
			top={
				<>
					<Text type="H1Bold">Almost there!</Text>
					<Text type="H1">Just verify your email.</Text>
				</>
			}
			content={
				<>
					<Text type="H3">
						One last thing! Before using app you need to confirm your email address. You can do that by tapping the link
						in a message that we have send to you.
						<br />
						<br />
						Once done you can Sign In!
					</Text>
				</>
			}
			bottom={<Button handleClick={handleButton}>I am ready to Sign In</Button>}
		/>
	);
};

export default ConfirmSignup;
