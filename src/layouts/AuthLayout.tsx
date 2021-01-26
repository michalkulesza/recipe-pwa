import React from "react";
import styled from "styled-components/macro";

interface Props {
	top: React.ReactNode;
	content: React.ReactNode;
	bottom: React.ReactNode;
}

const Container = styled.div`
	padding: 1rem;
	display: flex;
	height: 100%;
	justify-content: center;
	flex-direction: column;
`;

const Content = styled.div``;

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
