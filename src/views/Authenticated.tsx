import React from "react";
import styled from "styled-components/macro";

interface Props {}

const Container = styled.div``;

const Authenticated: React.FC<Props> = () => {
	return (
		<Container>
			<h1>Auth</h1>
		</Container>
	);
};

export default Authenticated;
