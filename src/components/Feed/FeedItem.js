import React from "react";
import { Link } from "@react-navigation/native";
import { Description, Name, Post } from "./style";
import LazyImage from "../LazyImage";

import CommentView from "../Coment/CommentView-Container";

import CarouselVeiw from "../Carousel/CarouselView-container";
import LikeView from "../Likes/LikeView-container";
import UserHeader from "../user/UserHeader";

export default FeedItem = ({ item, viewable, scenary }) => {
	return (
		<Post>
			<UserHeader user={item.author} />
			{scenary === "feed" && (
				<CarouselVeiw
					data={item?.medias || []}
					shouldLoad={viewable?.includes(item.id)}
				/>
			)}

			<Description>{item.description}</Description>
			<LikeView item={item} />

			{scenary.includes("feed") && (
				<CommentView parentId={item.id} scenary={scenary} />
			)}
		</Post>
	);
};
