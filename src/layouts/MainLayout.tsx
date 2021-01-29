import React from "react";
import styled from "styled-components/macro";

interface Props {
	header?: React.ReactNode;
	content: React.ReactNode;
}

const Container = styled.div`
	padding: 1rem;
	display: flex;
	height: 100%;
	justify-content: center;
	flex-direction: column;
`;

const Content = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
`;

const MainLayout: React.FC<Props> = ({ header, content }) => {
	return (
		<Container>
			{header}
			<Content>{content}</Content>
		</Container>
	);
};

export default MainLayout;
