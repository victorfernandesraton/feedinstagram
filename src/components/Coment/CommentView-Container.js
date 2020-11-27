import React, { useState, useEffect, useReducer, useCallback } from "react";
import { Button, FlatList, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CommentInput from "./CommentInput";

import CommentItem from "./CommentItem";
import Reducer, { initialState } from "./Comment-reducer";
import { addComment, fetchPost } from "./Comment-action";
import { Loading } from "../../baseCSS/styles";

const CommentView = ({ parentId, scenary = "feed" }) => {
	const { navigate } = useNavigation();

	const [{ data, metadata, loading, called }, dispatch] = useReducer(
		Reducer,
		initialState
	);
	const { page, limit, total } = metadata;

	const onPost = useCallback((data) => {
		addComment(dispatch, { data: data, total });
	});

	const onButtonMore = useCallback(() => {
		if (scenary === "feed") {
			navigate("single-feed", { id: parentId, scenary: "single-feed" });
		} else {
			fetchPost(dispatch, {
				page,
				limit: scenary == "single-feed" ? 5 : 2,
				loading,
				total,
				parentId,
			});
		}
	}, [page, limit, scenary, total, parentId]);

	useEffect(() => {
		if (!loading && !called) {
			fetchPost(dispatch, {
				page: 1,
				limit: scenary == "single-feed" ? 5 : 2,
				loading,
				total,
				parentId,
			});
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

			{(scenary == "single-feed" || total < limit || total == 0) && (
				<CommentInput onPost={onPost} total={total} parent={{ id: parentId }} />
			)}
			{total >= limit && total != 0 && (
				<Button title="Ver comentários" onPress={onButtonMore} />
			)}
		</>
	);
};

export default CommentView;
