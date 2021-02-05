import React from "react";
import { Default, Clear, Spinning, Round, Tile } from "./Button.styled";
import { FaSpinner } from "react-icons/fa";

export type PropsI = {
	handleClick?: () => void;
	styling?: "default" | "clear" | "round" | "tile";
	type?: "button" | "submit";
	form?: string;
	disabled?: boolean;
	loading?: boolean;
	height?: string;
};

const Button: React.FC<PropsI> = ({
	children,
	handleClick,
	styling = "default",
	type = "button",
	form,
	disabled,
	loading,
	height,
}) => {
	return styling === "clear" ? (
		<Clear onMouseDown={handleClick} type={type} form={form} disabled={disabled}>
			{children}
		</Clear>
	) : styling === "round" ? (
		<Round onMouseDown={handleClick} type={type} form={form} disabled={disabled}>
			{children}
		</Round>
	) : styling === "tile" ? (
		<Tile onMouseDown={handleClick} type={type} form={form} disabled={disabled} height={height}>
			{children}
		</Tile>
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
