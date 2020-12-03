import React from "react";

import { Description, Name, Post } from "./style";
import LazyImage from "../LazyImage";

import CommentView from "../Coment/CommentView-Container";

import UserHeader from "../user/UserHeader";
import CarouselVeiw from "../Carousel/CarouselView-container";

export default FeedItem = ({ item, viewable, scenary }) => {
	return (
		<Post>
			<UserHeader id={item.author} />
			{scenary === "feed" && (
				<CarouselVeiw
					shouldLoad={viewable?.includes(item.id)}
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
