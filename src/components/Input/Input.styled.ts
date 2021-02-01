import styled from "styled-components/macro";
import { css } from "styled-components";
import theme from "../../styles/theme";
import { InputPropsI } from "./Input";

interface PropsI {
	styling: InputPropsI["styling"];
	type: InputPropsI["type"];
	error?: InputPropsI["error"];
}

const commonStyles = ({ styling, type, error = "" }: PropsI) => css`
	width: 100%;
	padding: 0.81rem;
	background-color: ${theme.background};
	border-radius: ${styling === "default" ? "5px" : "0"};
	border-bottom: ${styling === "underline" && error.length > 0
		? "1px solid " + theme.error
		: styling === "underline"
		? "1px solid "
		: "none"};
	font-size: 0.81rem;
`;

export const Container = styled.div`
	flex: 1;
`;

export const TextArea = styled.textarea`
	${(props: PropsI) => commonStyles(props)};
	min-height: 8rem;
`;

export const Select = styled.select`
	${(props: PropsI) => commonStyles(props)}
`;

export const InputContainer = styled.input`
	${(props: PropsI) => commonStyles(props)};
`;

export const Suffix = styled.div``;

export const Error = styled.div`
	padding: 0 0.81rem;
	font-size: 0.81rem;
	color: ${theme.error};
`;
