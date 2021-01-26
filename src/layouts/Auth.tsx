import React from "react";
import styled from "styled-components";

interface Props {
	top: React.ReactNode;
	content: React.ReactNode;
	bottom: React.ReactNode;
}

const Container = styled.div``;

const Content = styled.div``;

const Auth: React.FC<Props> = ({ top, content, bottom }) => {
	return (
		<Container>
			{top}
			<Content>{content}</Content>
			{bottom}
		</Container>
	);
};

export default Auth;
