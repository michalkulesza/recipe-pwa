import styled from "styled-components/macro";
import { css } from "styled-components";
import theme from "../../styles/theme";

const commonStyles = css`
	display: flex;
	justify-content: center;
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
