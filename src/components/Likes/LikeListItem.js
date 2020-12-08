import React from "react";
import { Text, View } from "react-native";

import { useLogin } from "../login/Login-context";

import { LikeListItemContainer } from "./styled";

import Header from "../user/UserHeader";

const LikeListItem = ({item}) => {
	console.log('here',item)
	return (
		<LikeListItemContainer>
			<Header id={item.author} />
			<Text>Curtiu isso</Text>
		</LikeListItemContainer>
	);
};

export default LikeListItem;
