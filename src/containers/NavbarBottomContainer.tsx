import React from "react";
import { ADD, BROWSE, HOME, SETTINGS } from "../constants/routes";
import { useLocation } from "react-router-dom";

import { AiOutlineHome, AiOutlinePlusCircle, AiOutlineAppstore, AiOutlineSetting } from "react-icons/ai";
import { BottomNavbar, Text } from "../components";

const NavbarBottomContainer: React.FC = () => {
	const { pathname } = useLocation();

	return (
		<BottomNavbar>
			<BottomNavbar.Item active={pathname === HOME} link={HOME}>
				<BottomNavbar.Icon>
					<AiOutlineHome />
				</BottomNavbar.Icon>
				<Text color={pathname === HOME ? "primary" : "text"}>Home</Text>
			</BottomNavbar.Item>
			<BottomNavbar.Item active={pathname.startsWith(ADD)} link={ADD}>
				<BottomNavbar.Icon>
					<AiOutlinePlusCircle />
				</BottomNavbar.Icon>
				<Text color={pathname.startsWith(ADD) ? "primary" : "text"}>Add</Text>
			</BottomNavbar.Item>
			<BottomNavbar.Item active={pathname.startsWith(BROWSE)} link={BROWSE}>
				<BottomNavbar.Icon>
					<AiOutlineAppstore />
				</BottomNavbar.Icon>
				<Text color={pathname.startsWith(BROWSE) ? "primary" : "text"}>Browse</Text>
			</BottomNavbar.Item>
			<BottomNavbar.Item active={pathname.startsWith(SETTINGS)} link={SETTINGS}>
				<BottomNavbar.Icon>
					<AiOutlineSetting />
				</BottomNavbar.Icon>
				<Text color={pathname.startsWith(SETTINGS) ? "primary" : "text"}>Settings</Text>
			</BottomNavbar.Item>
		</BottomNavbar>
	);
};

export default NavbarBottomContainer;
