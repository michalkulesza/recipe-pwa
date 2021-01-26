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
	background-color: ${theme.primary};
`;

export const Clear = styled.button`
	${commonStyles};
	color: ${theme.text};
	background-color: transparent;
`;
