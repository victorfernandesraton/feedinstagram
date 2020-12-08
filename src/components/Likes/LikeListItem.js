import React from "react";
import { Text } from "react-native";

import { LikeListItemContainer } from "./styled";

import Header from "../user/UserHeader";

const LikeListItem = ({item}) => {
	return (
		<LikeListItemContainer>
			<Header id={item.author} />
			<Text>Curtiu isso</Text>
		</LikeListItemContainer>
	);
};

export default LikeListItem;
