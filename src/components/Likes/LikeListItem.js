import React from "react";
import { Text } from "react-native";
import UserHeader from "../user/UserHeader";

import { LikeListItemContainer } from "./styled";

const LikeListItem = ({ item }) => {
	return (
		<LikeListItemContainer>
			<UserHeader user={item.author} />
			<Text>Curtiu isso</Text>
		</LikeListItemContainer>
	);
};

export default LikeListItem;
