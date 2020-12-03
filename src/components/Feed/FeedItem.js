import React, { useEffect, useReducer } from "react";

import { Loading } from "../../baseCSS/styles";

import { Avatar, Description, Header, Name, Post } from "./style";
import LazyImage from "../LazyImage";


import CommentView from "../Coment/CommentView-Container";
import Reducer, { initialState } from "../user/User-reducer";
import { fetchUser } from "../user/User-action";
export default FeedItem = ({ item, viewable, scenary }) => {
	const [{ user, loading }, dispatch] = useReducer(Reducer, initialState);
	useEffect(() => {
		fetchUser(dispatch, { id: item.author });
	}, []);

	return (
		<Post>
			{user && !loading ? (
				<Header>
					<Avatar source={{ uri: user.avatar }} />
					<Name>{user.name}</Name>
				</Header>
			) : (
				<Loading />
			)}

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
