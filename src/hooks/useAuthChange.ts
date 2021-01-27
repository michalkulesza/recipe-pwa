import { useEffect } from "react";
import { clearUser, setUser } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { Hub } from "aws-amplify";

const useAuthChange = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		Hub.listen("auth", data => {
			switch (data.payload.event) {
				case "signIn":
					dispatch(setUser(data.payload.data.attributes));
					break;
				case "signOut":
					dispatch(clearUser());
					break;
			}
		});
	}, [dispatch]);
};

export default useAuthChange;
