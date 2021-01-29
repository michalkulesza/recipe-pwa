import React, { createContext, useContext } from "react";
import { Container, ItemStyle, ItemContent, ItemIcon } from "./BottomNavbar.styled";
import { Link } from "react-router-dom";

interface BottomNavbarCompositionI {
	Item: React.FC<ItemPropsI>;
	Icon: React.FC;
}

interface BottomNavbarContextI {
	active: boolean;
}

export const BottomNavbarContext = createContext<BottomNavbarContextI>({ active: false });

interface BottomNavbarPropsI {
	children: React.ReactNode;
}

const BottomNavbar: React.FC<BottomNavbarPropsI> & BottomNavbarCompositionI = ({ children }) => {
	return <Container>{children}</Container>;
};

interface ItemPropsI {
	children: React.ReactNode;
	link: string;
	active?: boolean;
}

export const Item: React.FC<ItemPropsI> = ({ children, link, active = false }) => {
	return (
		<BottomNavbarContext.Provider value={{ active }}>
			<ItemStyle>
				<Link to={link}>
					<ItemContent>{children}</ItemContent>
				</Link>
			</ItemStyle>
		</BottomNavbarContext.Provider>
	);
};

export const Icon: React.FC = ({ children }) => {
	const { active } = useContext(BottomNavbarContext);

	return <ItemIcon active={active}>{children}</ItemIcon>;
};

BottomNavbar.Item = Item;
BottomNavbar.Icon = Icon;

export default BottomNavbar;
