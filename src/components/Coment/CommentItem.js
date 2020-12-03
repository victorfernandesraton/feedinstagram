import React from "react";
import { Description, Name, Post } from "./style";

import UserHeader from "../user/UserHeader";

export default FeedItem = ({ item }) => {
	return (
		<Post>
			<UserHeader id={item.author} />
			<Description>
				<Name>{item.author.name}</Name> {item.description}
			</Description>
		</Post>
	);
};
