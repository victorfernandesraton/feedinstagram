import React from "react";
import { Avatar, Description, Header, Name, Post } from "./style";
import LazyImage from "../LazyImage";
import authorJSON from "../../mocks/user.json";

import CommentView from "../Coment/CommentView-Container";

export default FeedItem = ({ item, viewable, scenary }) => {
	const author = authorJSON.find((i) => i.id == item.author);

	return (
		<Post>
			<Header>
				<Avatar source={{ uri: author.avatar }} />
				<Name>{author.name}</Name>
			</Header>

			{scenary === "feed" && (
				<LazyImage
					aspectRatio={item.aspectRatio}
					shouldLoad={viewable?.includes(item.id)}
					smallSource={{ uri: item.small }}
					source={{ uri: item.media }}
				/>
			)}

			<Description>
				<Name>{item.author.name}</Name> {item.description}
			</Description>

			{scenary.includes("feed") && (
				<CommentView parentId={item.id} scenary={scenary} />
			)}
		</Post>
	);
};
