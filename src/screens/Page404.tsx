import React from "react";
import { useHistory } from "react-router-dom";
import { Text, Button } from "../components";
import { HOME } from "../constants/routes";
import { AuthLayout } from "../layouts";

type PropsI = {};

const Page404: React.FC<PropsI> = () => {
	const history = useHistory();
	const handleButton = () => history.push(HOME);

	return (
		<AuthLayout
			top={
				<>
					<Text type="H1Bold">404</Text>
					<Text type="H1">Nothing's here.</Text>
				</>
			}
			content={
				<>
					<Text type="H3">Requested page has not been found.</Text>
				</>
			}
			bottom={<Button handleClick={handleButton}>Take me back</Button>}
		/>
	);
};

export default Page404;
