import React from "react";
import { Signin } from "../screens";

interface Props {}

const Unauthenticated: React.FC<Props> = () => {
	return <Signin />;
};

export default Unauthenticated;
