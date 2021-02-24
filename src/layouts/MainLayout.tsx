import React from "react";
import styled from "styled-components/macro";
import { Style } from "../styles/common";

interface Props {
	header?: React.ReactNode;
	content: React.ReactNode;
}

const Container = styled.div`
	position: relative;
	display: flex;
	height: 100vh;
	height: -webkit-fill-available;
	width: 100%;
	flex-direction: column;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
`;

const Scrollable = styled.div`
	min-height: 100%;
	height: fit-content;
	width: 100%;
	padding: ${Style.margin};
	flex-shrink: 0;
`;

const Header = styled.div`
	padding-top: 1rem;
`;

const Content = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	padding-bottom: 6rem;
`;

const MainLayout: React.FC<Props> = ({ header, content }) => {
	return (
		<Container>
			<Scrollable>
				<Header>{header}</Header>
				<Content>{content}</Content>
			</Scrollable>
		</Container>
	);
};

export default MainLayout;
