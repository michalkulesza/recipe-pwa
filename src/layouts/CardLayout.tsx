import React from "react";
import styled from "styled-components/macro";
import { Style } from "../styles/common";

interface Props {
	header: React.ReactNode;
	content: React.ReactNode;
	navbar?: React.ReactNode;
}

const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
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

const Header = styled.header`
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	height: 300px;
	width: 100%;
`;

const Card = styled.div`
	position: relative;
	z-index: 2;
	min-height: 100%;
	width: 100%;
	padding-top: 250px;
`;

const Content = styled.div`
	width: 100%;
	min-height: calc(100vh - 250px);
	background-color: rgba(255, 255, 255, 0.95);
	backdrop-filter: blur(5px);
	border-radius: 13px 13px 0 0;
	overflow: hidden;
	padding: ${`calc(${Style.margin} * 2)`};
`;

const CardLayout: React.FC<Props> = ({ navbar, header, content }) => {
	return (
		<Container>
			<Navbar>{navbar}</Navbar>
			<Header>{header}</Header>
			<Card>
				<Content>{content}</Content>
			</Card>
		</Container>
	);
};

export default CardLayout;
