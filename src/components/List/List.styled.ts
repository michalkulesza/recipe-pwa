import styled from "styled-components/macro";
import { Style } from "../../styles/common";
import theme from "../../styles/theme";

export const Container = styled.ul`
	border: 1px solid ${theme.background};
	width: 100%;
	border-radius: 5px;
   list
`;

export const Item = styled.li`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: calc(${Style.margin} * 0.75) ${Style.margin};

	&:not(:last-of-type) {
		border-bottom: 1px solid ${theme.background};
	}
`;
