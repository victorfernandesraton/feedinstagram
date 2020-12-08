import React, { useEffect, useReducer } from "react";

import { Loading } from "../../baseCSS/styles";

import Reducer, { initialState } from "./User-reducer";
import { fetchUser } from "./User-action";

import UserHeader from "./UserHeader";

const UserHeaderView = ({ id }) => {
	const [{ user, loading }, dispatch] = useReducer(Reducer, initialState);
	useEffect(() => {
		fetchUser(dispatch, { id });
	}, [id]);

	if (!user || loading) {
		return <Loading />;
	}

	return <UserHeader user={user} />;
};

export default UserHeaderView;
