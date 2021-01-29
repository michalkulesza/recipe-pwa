import React from "react";
import { Container, Image, Overlay } from "./Tile.styled";
import { Text } from "../../components";

export interface PropsI {
	title: string;
	image: string;
	height?: string;
	width?: string;
	marginRight?: string;
	noOverlay?: boolean;
}

const Tile: React.FC<PropsI> = ({ title, image, height, width, marginRight = "0rem", noOverlay }) => {
	return (
		<Container height={height} width={width} marginRight={marginRight}>
			<Image src={image} />
			<Overlay noOverlay={noOverlay}>
				<Text type="H2Bold" color="textInverted">
					{title}
				</Text>
			</Overlay>
		</Container>
	);
};

export default Tile;
