import styled from "styled-components/macro";
import { css } from "styled-components";
import theme from "../../styles/theme";
import { InputPropsI } from "./Input";

interface PropsI {
	styling: InputPropsI["styling"];
	type: InputPropsI["type"];
}

const commonStyles = ({ styling, type }: PropsI) => css`
	width: 100%;
	padding: 0.81rem;
	background-color: ${theme.background};
	border-radius: ${styling === "default" ? "5px" : "0"};
	border-bottom: ${styling === "underline" ? "1px solid " + theme.placeholder : "none"};
	font-size: 0.81rem;
`;

export const TextArea = styled.textarea`
	${(props: PropsI) => commonStyles(props)}
`;

export const Select = styled.select`
	${(props: PropsI) => commonStyles(props)}
`;

export const InputContainer = styled.input`
	${(props: PropsI) => commonStyles(props)};
`;

export const Suffix = styled.div``;
