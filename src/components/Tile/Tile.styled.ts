import styled from "styled-components/macro";
import { Shadow } from "../../styles/common";
import { PropsI } from "./Tile";

interface ContainerPropsI {
	height: PropsI["height"];
	width: PropsI["width"];
	marginRight: PropsI["marginRight"];
}

interface OverlayPropsI {
	noOverlay?: PropsI["noOverlay"];
}

export const Container = styled.div`
	position: relative;
	height: ${({ height, width }: ContainerPropsI) =>
		height ? height : width ? `calc(${width} / 2 * 1.42)` : "initial"};
	width: ${({ height, width }: ContainerPropsI) =>
		height ? `calc(${height} * 0.7)` : `calc(${width} - 0.5rem)` ? `calc(${width} / 2 - 0.5rem)` : "initial"};
	overflow: hidden;
	display: flex;
	justify-content: center;
	border-radius: 5px;
	margin-right: ${({ marginRight }: ContainerPropsI) => marginRight};
	${Shadow};
	flex-shrink: 0;
`;

export const Image = styled.img`
	object-fit: cover;
	height: 100%;
`;

export const Overlay = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: rgb(0, 0, 0);
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 115%);
	display: flex;
	align-items: flex-end;
	padding: 1rem;
	visibility: ${({ noOverlay }: OverlayPropsI) => noOverlay && "hidden"};
`;
