import React from "react";
import { Default, Clear, Spinning } from "./Button.styled";
import { FaSpinner } from "react-icons/fa";

type PropsI = {
	handleClick?: () => void;
	styling?: "default" | "clear" | "round";
	type?: "button" | "submit";
	form?: string;
	disabled?: boolean;
	loading?: boolean;
};

const Button: React.FC<PropsI> = ({
	children,
	handleClick,
	styling = "default",
	type = "button",
	form,
	disabled,
	loading,
}) => {
	return styling === "clear" ? (
		<Clear onMouseDown={handleClick} type={type} form={form} disabled={disabled}>
			{children}
		</Clear>
	) : styling === "round" ? (
		<Default onMouseDown={handleClick} type={type} form={form} disabled={disabled}></Default>
	) : (
		<Default onMouseDown={handleClick} type={type} form={form} disabled={disabled}>
			{loading ? (
				<Spinning>
					<FaSpinner />
				</Spinning>
			) : (
				children
			)}
		</Default>
	);
};

export default Button;
