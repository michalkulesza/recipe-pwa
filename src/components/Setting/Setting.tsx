import React from "react";
import {
	Container,
	GroupContainer,
	GroupHeading,
	GroupIcon,
	GroupText,
	GroupContent,
	ItemButtonContainer,
	ItemInfoContainer,
} from "./Setting.styled";
import { Text } from "../../components";

interface SettingCompositionI {
	Group: React.FC<GroupPropsI>;
	ItemButton: React.FC<ItemButtonPropsI>;
	ItemInfo: React.FC<ItemInfoPropsI>;
}

interface SettingPropsI {}

interface GroupPropsI {
	icon: React.ReactElement;
	title: string;
	description: string;
}

interface ItemButtonPropsI {
	handler: () => void;
}

interface ItemInfoPropsI {
	title: string;
}

export const Group: React.FC<GroupPropsI> = ({ icon, title, description, children }) => {
	return (
		<GroupContainer>
			<GroupHeading>
				<GroupIcon>{icon}</GroupIcon>
				<GroupText>
					<Text type="H2Bold" color="text">
						{title}
					</Text>
					<Text type="H3" color="placeholder">
						{description}
					</Text>
				</GroupText>
			</GroupHeading>
			<GroupContent>{children}</GroupContent>
		</GroupContainer>
	);
};

export const ItemButton: React.FC<ItemButtonPropsI> = ({ handler, children }) => {
	return (
		<ItemButtonContainer onMouseDown={handler}>
			<Text type="H2">{children}</Text>
		</ItemButtonContainer>
	);
};

export const ItemInfo: React.FC<ItemInfoPropsI> = ({ title, children }) => {
	return (
		<ItemInfoContainer>
			<Text type="H3">{title}</Text>
			<Text type="H2">{children}</Text>
		</ItemInfoContainer>
	);
};

const Setting: React.FC<SettingPropsI> & SettingCompositionI = ({ children }) => {
	return <Container>{children}</Container>;
};

Setting.Group = Group;
Setting.ItemButton = ItemButton;
Setting.ItemInfo = ItemInfo;

export default Setting;
