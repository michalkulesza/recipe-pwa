import React from "react";
import styled from "styled-components/macro";
import { NavbarBottomContainer } from "../containers";

interface Props {
	children: React.ReactNode;
}

const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
`;

const Navbar = styled.div`
	position: absolute;
	height: fit-content;
	z-index: 100;
	width: 100%;
	bottom: 0;
`;

const BottomNavbarLayout: React.FC<Props> = ({ children }) => {
	return (
		<Container>
			{children}
			<Navbar>
				<NavbarBottomContainer />
			</Navbar>
		</Container>
	);
};

export default BottomNavbarLayout;
