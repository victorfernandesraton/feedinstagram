import React, { useEffect, useReducer, useState } from "react";
import { Avatar, Description, Header, Name, Post, BasicText } from "./style";
import LazyImage from "../LazyImage";
import { Button, TextInput } from "react-native";
import authorJSON from "../../mocks/user.json";

import Reducer, { initialState } from "./Feed-reducer";
import { fetchPost } from "./Feed-action";
import { dispatchTypes } from "./Feed-constants";
import CommentView from "../Coment/CommentView-Container";

export default FeedItem = ({ item, viewable, scenary }) => {
	const author = authorJSON.find((i) => i.id == item.author);
	const [{ data, metadata, loading, called, error }, dispatch] = useReducer(
		Reducer,
		initialState
	);

	const { page, limit, total } = metadata;
	const [refreshing, setRefreshing] = useState(false);

	async function refreshList() {
		setRefreshing(true);
		dispatch({
			type: dispatchTypes.RESET,
		});

		await fetchPost(dispatch, {
			page: 1,
			limit: 4,
			loading,
			total: 0,
			params: { feedId: item.id },
		});

		setRefreshing(false);
	}

	useEffect(() => {
		fetchPost(dispatch, {
			page: 1,
			limit: 3,
			loading,
			total,
			params: { feedId: item.id },
		});
	}, []);

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
				<CommentView parentId={item.id}  scenary={scenary}/>
			)}
		</Post>
	);
};
