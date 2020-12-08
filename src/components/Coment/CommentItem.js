import React from "react";
import { Description, Name, Post } from "./style";

import LikeView from "../Likes/LikeView-container";
import UserHeader from "../user/UserHeader";

export default FeedItem = ({ item }) => {
	return (
		<Post>
			<UserHeader user={item.author} />
			<Description>{item.description}</Description>
			<LikeView item={item} scenary="comment" />
		</Post>
	);
};
