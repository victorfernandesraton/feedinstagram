import React from "react";
import { Link } from "@react-navigation/native";
import { Description, Name, Post } from "./style";
import LazyImage from "../LazyImage";

import CommentView from "../Coment/CommentView-Container";

import UserHeader from "../user/UserHeader";
import CarouselVeiw from "../Carousel/CarouselView-container";
import { View, Text } from "react-native";
import LikeButton from "../Likes/LikeButton";

export default FeedItem = ({ item, viewable, scenary }) => {
	return (
		<Post>
			<UserHeader id={item.author} />
			{scenary === "feed" && (
				<CarouselVeiw
					data={item?.medias || []}
					shouldLoad={viewable?.includes(item.id)}
				/>
			)}

			<Description>
				<Name>{item.author.name}</Name> {item.description}
			</Description>

			<View>
				<LikeButton postId={item.id} />
				<Link to={`/likes?id=${item.id}`}>
					<Text>Ver curtidas</Text>
				</Link>
			</View>

			{scenary.includes("feed") && (
				<CommentView parentId={item.id} scenary={scenary} />
			)}
		</Post>
	);
};
