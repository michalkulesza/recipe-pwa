import React from "react";
import styled from "styled-components/macro";
import { useScreen } from "./hooks";
import { Authenticated, Unauthenticated } from "./views";

const auth = false;

const Container = styled.div``;

const App: React.FC = () => {
	const screen = useScreen();

	return <Container style={{ height: screen?.height }}>{auth ? <Authenticated /> : <Unauthenticated />}</Container>;
};

export default App;
