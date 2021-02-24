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
	font-size: 1.75rem;
	font-weight: normal;
`;

export const H1B = styled.h1<PropsI>`
	${props => commonStyles(props)};
	font-size: 1.75rem;
	font-weight: bold;
`;

export const H2 = styled.h2<PropsI>`
	${props => commonStyles(props)};
	font-size: 1.11rem;
	font-weight: normal;
`;

export const H2B = styled.h2<PropsI>`
	${props => commonStyles(props)};
	font-size: 1.11rem;
	font-weight: bold;
`;

export const H3 = styled.h3<PropsI>`
	${props => commonStyles(props)};
	font-size: 0.81rem;
	font-weight: normal;
`;

export const H3B = styled.h3<PropsI>`
	${props => commonStyles(props)};
	font-size: 0.81rem;
	font-weight: bold;
`;

export const H4 = styled.h4<PropsI>`
	${props => commonStyles(props)};
	font-size: 0.68rem;
	font-weight: normal;
`;

export const H4B = styled.h4<PropsI>`
	${props => commonStyles(props)};
	font-size: 0.68rem;
	font-weight: bold;
`;
