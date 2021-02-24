import React from "react";
import { Text, Setting } from "../components";
import { MainLayout } from "../layouts";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";

const handleLogout = () => {};

const Header: React.FC = () => {
	return <Text type="H1Bold">Settings</Text>;
};

const Content: React.FC = () => {
	const email = useSelector((state: RootState) => state.auth.user?.email);

	return (
		<Setting.Group icon={<AiOutlineUser size="100%" />} title="User" description="Edit and manage your account details">
			<Setting.ItemInfo title="E-mail">{email}</Setting.ItemInfo>
			<Setting.ItemButton handler={handleLogout}>Log Out</Setting.ItemButton>
		</Setting.Group>
	);
};

const Settings: React.FC = () => {
	return <MainLayout header={<Header />} content={<Content />} />;
};

export default Settings;
