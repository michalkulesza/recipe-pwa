import React from "react";
import { Container, TextArea, Select, InputContainer, Suffix, Error } from "./Input.styled";

import { Text } from "../../components";

export type InputsT =
	| React.ChangeEvent<HTMLTextAreaElement>
	| React.ChangeEvent<HTMLSelectElement>
	| React.ChangeEvent<HTMLInputElement>;

export interface InputPropsI {
	value: string | number;
	onChange: (e: InputsT) => void;
	styling?: "default" | "underline";
	type?: "text" | "textArea" | "password" | "select" | "number" | "email";
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
	return (
		<Container>
			{type === "textArea" ? (
				<>
					<label htmlFor={name}>
						<Text>{label}</Text>
					</label>
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
					<label htmlFor={name}>
						<Text>{label}</Text>
					</label>
					<Select id={name} styling={styling} type={type} value={value} onChange={e => onChange(e)}></Select>
					<Suffix>{suffix}</Suffix>
				</>
			) : (
				<>
					<label htmlFor={name}>
						<Text>{label}</Text>
					</label>
					<InputContainer
						id={name}
						styling={styling}
						type={type}
						placeholder={placeholder}
						value={value}
						onChange={e => onChange(e)}
						error={error}
					></InputContainer>
					<Suffix>{suffix}</Suffix>
					{error && <Error>{error}</Error>}
				</>
			)}
		</Container>
	);
};

export default Input;
