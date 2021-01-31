import React from "react";
import styled from "styled-components/macro";

interface Props {
	top?: React.ReactNode;
	content: React.ReactNode;
	bottom?: React.ReactNode;
}

const Container = styled.div`
	padding: 0rem 1rem;
	display: flex;
	height: 100%;
	min-height: -webkit-fill-available;
	justify-content: center;
	flex-direction: column;
`;

const Content = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
`;

const AuthLayout: React.FC<Props> = ({ top, content, bottom }) => {
	return (
		<Container>
			{top}
			<Content>{content}</Content>
			{bottom}
		</Container>
	);
};

export default AuthLayout;
