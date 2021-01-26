import React from "react";
import { TextArea, Select, InputContainer, Suffix, Error } from "./Input.styled";

export type InputsT =
	| React.ChangeEvent<HTMLTextAreaElement>
	| React.ChangeEvent<HTMLSelectElement>
	| React.ChangeEvent<HTMLInputElement>;

export interface InputPropsI {
	value: string;
	onChange: (e: InputsT) => void;
	styling?: "default" | "underline";
	type?: "text" | "textArea" | "password" | "select" | "number";
	label?: string;
	placeholder?: string;
	suffix?: React.ReactNode;
	error?: string;
	name: string;
}

const Input: React.FC<InputPropsI> = ({
	value,
	onChange,
	type = "text",
	styling = "default",
	label,
	placeholder,
	suffix,
	error,
	name,
}) => {
	return type === "textArea" ? (
		<>
			<label htmlFor={name}>{label}</label>
			<TextArea
				id={name}
				styling={styling}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e)}
			></TextArea>
			<Suffix>{suffix}</Suffix>
		</>
	) : type === "select" ? (
		<>
			<label htmlFor={name}>{label}</label>
			<Select id={name} styling={styling} type={type} value={value} onChange={e => onChange(e)}></Select>
			<Suffix>{suffix}</Suffix>
		</>
	) : (
		<>
			<label htmlFor={name}>{label}</label>
			<InputContainer
				id={name}
				styling={styling}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e)}
			></InputContainer>
			<Suffix>{suffix}</Suffix>
			{error && <Error>{error}</Error>}
		</>
	);
};

export default Input;
