import React from "react";
import { Container, Image, Overlay } from "./Tile.styled";
import { RecipeI } from "../../redux/types/recipes";
import { Text } from "../../components";

export interface PropsI {
	id: string;
	image: string;
	title?: string;
	height?: string;
	width?: string;
	marginRight?: string;
	noOverlay?: boolean;
	clickHandler?: (id: RecipeI["id"]) => void;
}

const Tile: React.FC<PropsI> = ({ id, title, image, height, width, marginRight = "0rem", noOverlay, clickHandler }) => {
	return (
		<Container
			height={height}
			width={width}
			marginRight={marginRight}
			onMouseDown={clickHandler ? () => clickHandler(id) : () => null}
		>
			<Image src={image} />
			{title && (
				<Overlay noOverlay={noOverlay}>
					<Text type="H2Bold" color="textInverted">
						{title}
					</Text>
				</Overlay>
			)}
		</Container>
	);
};

export default Tile;
