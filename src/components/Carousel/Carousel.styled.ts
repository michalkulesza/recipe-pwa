import styled from "styled-components/macro";
import { Style } from "../../styles/common";

interface ContentPropsI {
	height: string;
}

export const Container = styled.div``;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Content = styled.div`
	position: relative;
	width: calc(100% + 2rem);
	margin-left: -${Style.margin};
	margin-top: -1rem;
	height: ${({ height }: ContentPropsI) => `calc(${height} + 2rem)`};
	overflow-y: scroll;
`;

export const Scrollable = styled.div`
	padding-left: ${Style.margin};
	height: fit-content;
	width: fit-content;
	display: flex;
	margin: 1rem 0;
`;
