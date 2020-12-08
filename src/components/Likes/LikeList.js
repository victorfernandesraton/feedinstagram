import React, { useEffect, useReducer, useCallback } from "react";
import { Button, FlatList } from "react-native";
import Reducer, { initialState } from "./Like-reducer";
import { getLike } from "./Like-action";
import LikeListItem from "./LikeListItem";
import { Loading } from "../../baseCSS/styles";

const LikeList = ({ publicationId, scenary = "feed" }) => {
	const [{ data, metadata, loading, called }, dispatch] = useReducer(
		Reducer,
		initialState
	);
	const { page, limit, total } = metadata;

	const onButtonMore = useCallback(() => {
		getLike(dispatch, {
			page,
			limit: 5,
			loading,
			total,
			publicationId,
		});
	}, [page, limit, scenary, total, publicationId]);

	useEffect(() => {
		getLike(dispatch, {
			page: 1,
			limit: 5,
			loading,
			total,
			publicationId,
		});
	}, []);

	return (
		<>
			{total > 0 && (
				<FlatList
					data={data}
					keyExtractor={(item) => String(item.id)}
					renderItem={LikeListItem}
					ListFooterComponent={loading && <Loading />}
					showVerticalScrollIndicator={false}
				/>
			)}
			{total >= limit && total != 0 && (
				<Button title="Ver mais" onPress={onButtonMore} />
			)}
		</>
	);
};

export default LikeList;
