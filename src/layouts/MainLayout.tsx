import React from "react";
import styled from "styled-components/macro";
import { Style } from "../styles/common";

interface Props {
	navbar?: React.ReactNode;
	header?: React.ReactNode;
	content: React.ReactNode;
}

const Container = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	overflow: hidden;
`;

const Scrollable = styled.div`
	padding: ${Style.margin};
	overflow-y: scroll;
`;

const Navbar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	padding: ${Style.margin};
	z-index: 100;
`;

const Header = styled.div`
	padding-top: 5rem;
`;

const Content = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	padding-bottom: 6rem;
`;

const MainLayout: React.FC<Props> = ({ navbar, header, content }) => {
	return (
		<Container>
			<Scrollable>
				<Navbar>{navbar}</Navbar>
				<Header>{header}</Header>
				<Content>{content}</Content>
			</Scrollable>
		</Container>
	);
};

export default MainLayout;
