import styled from "styled-components/macro";
import { css } from "styled-components";
import theme from "../../styles/theme";
import { ColorsI } from "../../types";

interface PropsI {
	inverted: boolean;
	color: keyof ColorsI;
}

const commonStyles = ({ inverted, color }: PropsI) => css`
	color: ${inverted ? theme.textInverted : theme[color]};
	margin: 0;
`;

export const H1 = styled.h1<PropsI>`
	${props => commonStyles(props)};
	font-size: 28pt;
	font-weight: normal;
`;

export const H1B = styled.h1<PropsI>`
	${props => commonStyles(props)};
	font-size: 28pt;
	font-weight: bold;
`;

export const H2B = styled.h1<PropsI>`
	${props => commonStyles(props)};
	font-size: 21pt;
	font-weight: bold;
`;

export const H3 = styled.h1<PropsI>`
	${props => commonStyles(props)};
	font-size: 13pt;
	font-weight: normal;
`;

export const H3B = styled.h1<PropsI>`
	${props => commonStyles(props)};
	font-size: 13pt;
	font-weight: bold;
`;

export const H4 = styled.h1<PropsI>`
	${props => commonStyles(props)};
	font-size: 11pt;
	font-weight: normal;
`;

export const H4B = styled.h1<PropsI>`
	${props => commonStyles(props)};
	font-size: 11pt;
	font-weight: bold;
`;
