import React from "react";
import { Container, Image, Overlay, Label, Input } from "./Header.styled";

import { BsCardImage } from "react-icons/bs";
import theme from "../../styles/theme";

type PropsI = {
	image?: string;
	input?: boolean;
	imageHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header: React.FC<PropsI> = ({ image = "", input = false, imageHandler }) => {
	return (
		<Container>
			{image && <Image src={image} />}
			{input && (
				<Overlay>
					{!image && <BsCardImage size="2rem" color={theme.background} />}
					<Label htmlFor="img">Select a new image</Label>
					<Input type="file" id="img" name="img" accept="image/*" onChange={e => imageHandler && imageHandler(e)} />
				</Overlay>
			)}
		</Container>
	);
};

export default Header;
