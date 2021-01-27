import React from "react";
import { Default, Clear } from "./Button.styled";

type PropsI = {
	handleClick: () => void;
	styling?: "default" | "clear" | "round";
	type?: "button" | "submit";
	form?: string;
	disabled?: boolean;
};

const Button: React.FC<PropsI> = ({ children, handleClick, styling = "default", type = "button", form, disabled }) => {
	return styling === "clear" ? (
		<Clear onMouseDown={handleClick} type={type} form={form} disabled={disabled}>
			{children}
		</Clear>
	) : styling === "round" ? (
		<Default onMouseDown={handleClick} type={type} form={form} disabled={disabled}></Default>
	) : (
		<Default onMouseDown={handleClick} type={type} form={form} disabled={disabled}>
			{children}
		</Default>
	);
};

export default Button;
