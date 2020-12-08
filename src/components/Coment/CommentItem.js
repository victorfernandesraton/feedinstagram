import React from "react";
import { Description, Name, Post } from "./style";

import UserHeader from "../user/UserHeader";
import LikeView from "../Likes/LikeView-container";

export default FeedItem = ({ item }) => {
	return (
		<Post>
			<UserHeader id={item.author} />
			<Description>
				<Name>{item.author.name}</Name> {item.description}
			</Description>
			<LikeView item={item} />
		</Post>
	);
};
