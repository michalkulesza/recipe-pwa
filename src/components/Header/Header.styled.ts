import styled from "styled-components/macro";
import { Style } from "../../styles/common";
import theme from "../../styles/theme";

export const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.3);
	padding-bottom: 50px;
`;

export const Label = styled.label`
	padding: ${`calc(${Style.margin} * 0.7) ${Style.margin}`};
	background-color: ${theme.primary};
	border-radius: 5px;
	font-size: 0.9rem;
	margin-top: ${`calc(${Style.margin} / 2)`};
`;

export const Input = styled.input`
	opacity: 0; /* make transparent */
	z-index: -1; /* move under anything else */
	position: absolute; /* don't let it take up space */
`;
