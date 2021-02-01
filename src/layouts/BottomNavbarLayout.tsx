import React from "react";
import styled from "styled-components/macro";
import { NavbarBottomContainer } from "../containers";

interface Props {
	children: React.ReactNode;
}

const Container = styled.div`
	position: relative;
	height: 100vh;
	height: -webkit-fill-available;
	width: 100%;
	overflow: hidden;
`;

const Content = styled.div`
	height: 100%;
	width: 100%;
`;

const Navbar = styled.div`
	position: fixed;
	height: fit-content;
	z-index: 100;
	width: 100%;
	bottom: 0;
`;

const BottomNavbarLayout: React.FC<Props> = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
			<Navbar>
				<NavbarBottomContainer />
			</Navbar>
		</Container>
	);
};

export default BottomNavbarLayout;
