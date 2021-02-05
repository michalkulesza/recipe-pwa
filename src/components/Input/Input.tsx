import React from "react";
import {
	Container,
	TextArea,
	Select,
	SelectIcon,
	SelectContainer,
	InputContainer,
	Suffix,
	Error,
} from "./Input.styled";

import { BsFillCaretDownFill } from "react-icons/bs";
import { Text } from "../../components";
import theme from "../../styles/theme";

export type InputsT =
	| React.ChangeEvent<HTMLTextAreaElement>
	| React.ChangeEvent<HTMLSelectElement>
	| React.ChangeEvent<HTMLInputElement>;

export interface InputPropsI {
	value: string | number;
	onChange: (e: InputsT) => void;
	name: string;
	styling?: "default" | "underline";
	type?: "text" | "textArea" | "password" | "select" | "number" | "email";
	label?: string;
	placeholder?: string;
	suffix?: React.ReactNode;
	error?: string;
	options?: string[];
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
	options,
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
					<SelectContainer>
						<Select id={name} styling={styling} type={type} value={value} onChange={e => onChange(e)}>
							{options &&
								options.map((option, i) => (
									<option key={i} value={option}>
										{option}
									</option>
								))}
						</Select>
						<SelectIcon>{<BsFillCaretDownFill color={theme.text} />}</SelectIcon>
					</SelectContainer>
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
						inputMode={type === "number" ? "numeric" : type === "email" ? "email" : "text"}
					></InputContainer>
					<Suffix>{suffix}</Suffix>
					{error && <Error>{error}</Error>}
				</>
			)}
		</Container>
	);
};

export default Input;
