import React from "react";
import { Container, Image } from "./Header.styled";

type PropsI = {
	imageURL?: string;
};

const Header: React.FC<PropsI> = ({ imageURL = "" }) => {
	return (
		<Container>
			<Image src={imageURL} />
		</Container>
	);
};

export default Header;
