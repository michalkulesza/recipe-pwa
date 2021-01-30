import React from "react";
import { Text } from "..";
import { Container } from "./Tag.styled";

type PropsI = {
	children: string;
	clickHandler: () => void;
};

const Tag: React.FC<PropsI> = ({ children, clickHandler }) => {
	return (
		<Container onMouseDown={clickHandler}>
			<Text color="placeholder">{children}</Text>
		</Container>
	);
};

export default Tag;
