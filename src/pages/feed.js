import React, { useCallback, useEffect, useReducer } from "react";

import FeedView from "../components/Feed/FeedView-Container";
import Reducer, { initialState } from "../components/Feed/Feed-reducer";
import { fetchPost } from "../components/Feed/Feed-action";
import { dispatchTypes } from "../components/Feed/Feed-constants";
export default function Feed({ route }) {
	const scenary = route?.params?.scenary;
	const id = route?.params?.id;

	const [{ data, metadata, loading }, dispatch] = useReducer(
		Reducer,
		initialState
	);

	const { page, limit, total } = metadata;

	const loadMore = useCallback(() => {
		if (scenary != "single-feed") {
			fetchPost(dispatch, { page, limit, total, loading });
		}
	}, [page, limit, id, scenary]);

	async function refreshList() {
		dispatch({
			type: dispatchTypes.RESET,
		});
		await fetchPost(dispatch, {
			page: 1,
			limit: scenary == "single-feed" ? 1 : 4,
			loading,
			total: 0,
		});
	}

	useEffect(() => {
		let params;
		if (scenary == "single-feed") {
			params = { feedId: id };
		}
		fetchPost(dispatch, {
			page: 1,
			limit: scenary == "single-feed" ? 1 : 4,
			loading,
			total,
			params,
		});
	}, []);

	return (
		<FeedView
			scenary={scenary}
			key={"list"}
			loading={loading}
			data={data}
			onReached={loadMore}
			onRefresh={() => refreshList}
		/>
	);
}
