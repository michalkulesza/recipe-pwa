import React from "react";
import { Container, Header, Content, Scrollable } from "./Carousel.styled";
import { Button, Text } from "../../components";
import { MdChevronRight } from "react-icons/md";
import { useHistory } from "react-router-dom";

type PropsI = {
	children: React.ReactNode;
	title: string;
	link: string;
	height: string;
};

const Carousel: React.FC<PropsI> = ({ children, title, link, height }) => {
	const history = useHistory();

	const handleButton = () => history.push(link);

	return (
		<Container>
			<Header>
				<Text type="H2Bold">{title}</Text>
				<Button handleClick={handleButton} styling="clear">
					See all <MdChevronRight size={15} />
				</Button>
			</Header>
			<Content height={height}>
				<Scrollable>{children}</Scrollable>
			</Content>
		</Container>
	);
};

export default Carousel;
