import React from "react";
import { ColorsI } from "../../types";

import { H1, H1B, H2B, H3, H3B, H4, H4B } from "./Text.styled";

interface Props {
	children: React.ReactNode;
	type?: "H1" | "H1Bold" | "H2Bold" | "H3" | "H3Bold" | "H4" | "H4Bold";
	inverted?: boolean;
	color?: keyof ColorsI;
	marginRight?: string;
}

const Text: React.FC<Props> = ({ children, type = "H3", inverted = false, color = "text", marginRight = "0" }) => {
	return (
		<div style={{ marginRight }}>
			{type === "H1" ? (
				<H1 inverted={inverted} color={color}>
					{children}
				</H1>
			) : type === "H1Bold" ? (
				<H1B inverted={inverted} color={color}>
					{children}
				</H1B>
			) : type === "H2Bold" ? (
				<H2B inverted={inverted} color={color}>
					{children}
				</H2B>
			) : type === "H3" ? (
				<H3 inverted={inverted} color={color}>
					{children}
				</H3>
			) : type === "H3Bold" ? (
				<H3B inverted={inverted} color={color}>
					{children}
				</H3B>
			) : type === "H4" ? (
				<H4 inverted={inverted} color={color}>
					{children}
				</H4>
			) : (
				<H4B inverted={inverted} color={color}>
					{children}
				</H4B>
			)}
		</div>
	);
};

export default Text;
