import React from "react";
import { TextArea, Select, InputContainer, Suffix } from "./Input.styled";

export interface InputPropsI {
	styling?: "default" | "underline";
	type?: "text" | "textArea" | "password" | "select" | "number";
	label?: string;
	placeholder?: string;
	suffix?: React.ReactNode;
}

const Input: React.FC<InputPropsI> = ({ type = "text", styling = "default", label, placeholder, suffix }) => {
	return type === "textArea" ? (
		<>
			<label htmlFor="">{label}</label>
			<TextArea styling={styling} type={type} placeholder={placeholder}></TextArea>
			<Suffix>{suffix}</Suffix>
		</>
	) : type === "select" ? (
		<>
			<label htmlFor="">{label}</label>
			<Select styling={styling} type={type}></Select>
			<Suffix>{suffix}</Suffix>
		</>
	) : (
		<>
			<label htmlFor="">{label}</label>
			<InputContainer styling={styling} type={type} placeholder={placeholder}></InputContainer>
			<Suffix>{suffix}</Suffix>
		</>
	);
};

export default Input;
