import React, { useEffect, useReducer } from "react";
import { View } from "react-native";
import { Avatar, Header, Name } from "./User-style";

import Reducer, { initialState } from "./User-reducer";
import { fetchUser } from "./User-action";
import { Loading } from "../../baseCSS/styles";

const UserHeader = ({ id }) => {
	const [{ user, loading }, dispatch] = useReducer(Reducer, initialState);
	useEffect(() => {
		fetchUser(dispatch, { id });
	}, [id]);

	if (!user || loading) {
		return <Loading />;
	}

	return (
		<Header>
			<Avatar source={{ uri: user.avatar }} />
			<Name>{user.name}</Name>
		</Header>
	);
};

export default UserHeader;
