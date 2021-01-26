import React from "react";
import { Default, Clear } from "./Button.styled";

type PropsI = {
	handleClick: () => void;
	styling?: "default" | "clear" | "round";
	type?: "button" | "submit";
	form?: string;
};

const Button: React.FC<PropsI> = ({ children, handleClick, styling = "default", type = "button", form }) => {
	return styling === "clear" ? (
		<Clear onMouseDown={handleClick} type={type} form={form}>
			{children}
		</Clear>
	) : styling === "round" ? (
		<Default onMouseDown={handleClick} type={type} form={form}></Default>
	) : (
		<Default onMouseDown={handleClick} type={type} form={form}>
			{children}
		</Default>
	);
};

export default Button;
