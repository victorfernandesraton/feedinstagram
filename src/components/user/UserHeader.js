import React, { useEffect, useReducer } from "react";
import { Avatar, Header, Name } from "./User-style";

const UserHeader = ({ user }) => {
	return (
		<Header>
			<Avatar source={{ uri: user?.avatar }} />
			<Name>{user?.name}</Name>
		</Header>
	);
};

export default UserHeader;
