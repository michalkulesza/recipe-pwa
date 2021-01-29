import styled from "styled-components/macro";
import { Shadow } from "../../styles/common";
import theme from "../../styles/theme";

export const Container = styled.div`
	width: 100%;
	height: 6rem;
	padding-bottom: 2rem;
	background-color: ${theme.background};
	display: flex;
	${Shadow};
`;

interface ItemPropsI {
	active: boolean;
}

export const ItemStyle = styled.div`
	height: 100%;
	flex: 1;
	background-color: ${theme.background};

	a {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const ItemContent = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ItemIcon = styled.div`
	svg {
		height: 1.4rem;
		width: 1.4rem;
		path {
			fill: ${({ active }: ItemPropsI) => (active ? theme.primary : theme.text)};
			stroke: ${({ active }: ItemPropsI) => (active ? theme.primary : theme.text)};
		}
	}
`;
