import React, { useState, useEffect, useReducer } from "react";
import { Button, FlatList, TextInput, View } from "react-native";

import CommentInput from "./CommentInput";

import CommentItem from "./CommentItem";
import Reducer, { initialState } from "./Comment-reducer";
import { addComment, fetchPost } from "./Comment-action";
import { Loading } from "../../baseCSS/styles";

const CommentView = ({ parentId }) => {
	const [{ data, metadata, loading, called }, dispatch] = useReducer(
		Reducer,
		initialState
	);
	const { page, limit, total } = metadata;

	useEffect(() => {
		if (!loading && !called) {
			fetchPost(dispatch, { page: 1, limit: 4, loading, total, parentId });
		}
	}, []);

	return (
		<>
			<FlatList
				data={data}
				keyExtractor={(item) => String(item.id)}
				renderItem={(item) => <CommentItem item={item.item} />}
				ListFooterComponent={loading && <Loading />}
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 10,
				}}
				showsVerticalScrollIndicator={false}
			/>
			{total > limit && <Button title="Carregar mais" />}
			<CommentInput
				onPost={(data) => {
					addComment(dispatch, data);
				}}
				parent={{id: parentId}}			
			/>
		</>
	);
};

export default CommentView;
