import React from "react";
import styled from "styled-components/macro";

interface Props {
	children: React.ReactNode;
	navbar: React.ReactNode;
}

const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
`;

const Navbar = styled.div`
	position: absolute;
	height: fit-content;
	width: 100%;
	bottom: 0;
`;

const BottomNavbarLayout: React.FC<Props> = ({ children, navbar }) => {
	return (
		<Container>
			{children}
			<Navbar>{navbar}</Navbar>
		</Container>
	);
};

export default BottomNavbarLayout;
