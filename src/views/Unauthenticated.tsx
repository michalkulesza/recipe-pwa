import React from "react";

import { Auth } from "../templates";
import { Text } from "../components";

interface Props {}

const Unauthenticated: React.FC<Props> = () => {
	return (
		<Auth
			top={
				<>
					<Text>Hello!</Text>
					<Text>Let's sign in.</Text>
				</>
			}
			content={"lol"}
			bottom={<Text>Bttom</Text>}
		/>
	);
};

export default Unauthenticated;
