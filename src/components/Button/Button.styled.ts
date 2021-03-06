import styled from "styled-components/macro";
import { css } from "styled-components";
import theme from "../../styles/theme";
import { Shadow } from "../../styles/common";
import { PropsI } from "./Button";

interface TilePropsI {
	height: PropsI["height"];
}

const commonStyles = css`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 0.81rem;
	padding: 0.81rem;
	border-radius: 5px;
`;

export const Default = styled.button`
	${commonStyles};
	color: #fff;
	background-color: ${theme.primary};
`;

export const Clear = styled.button`
	${commonStyles};
	padding-right: 0;
	color: ${theme.primary};
	background-color: transparent;
`;

export const Round = styled.button`
	${commonStyles};
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
	padding-right: 0;
	padding: 0;
	color: ${theme.primary};
	background-color: ${theme.textInverted};
	${Shadow};
`;

export const Tile = styled.button`
	${commonStyles};
	height: ${({ height }: TilePropsI) => height};
	width: ${({ height }: TilePropsI) => height && `calc(${height} * 0.7)`};
	padding-right: 0;
	padding: 0;
	color: ${theme.primary};
	background-color: ${theme.textInverted};
	${Shadow};
`;

export const Spinning = styled.div`
	animation: spin 1.5s infinite;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		transform: scale(1.2);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
