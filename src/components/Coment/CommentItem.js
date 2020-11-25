import React from "react";
import { Avatar, Description, Header, Name, Post } from "./style";
import authorJSON from "../../mocks/user.json";

export default FeedItem = ({ item }) => {
	const author = authorJSON.find((i) => i.id == item.author);

	return (
		<Post>
			<Header>
				<Avatar source={{ uri: author.avatar }} />
				<Name>{author.name}</Name>
			</Header>
			<Description>
				<Name>{item.author.name}</Name> {item.description}
			</Description>
		</Post>
	);
};
