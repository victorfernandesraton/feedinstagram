import React, { useState, useEffect, useReducer, useCallback } from "react";
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

	const onPost = useCallback((data) => {
		console.log(data);
		addComment(dispatch, { data: data, total });
	});

	useEffect(() => {
		if (!loading && !called) {
			fetchPost(dispatch, { page: 1, limit: 2, loading, total, parentId });
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
			{total >= limit && <Button title="Carregar mais" />}
			{total < limit && (
				<CommentInput onPost={onPost} total={total} parent={{ id: parentId }} />
			)}
		</>
	);
};

export default CommentView;
