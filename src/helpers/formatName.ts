import { UserI } from "../redux/types/auth";

export const formatName = (user: UserI) => `${user?.name[0].toUpperCase()}${user?.name.slice(1)}`;
