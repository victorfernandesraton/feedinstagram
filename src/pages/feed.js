import React, { useState, useEffect, useCallback, useReducer } from "react";
import axios from "axios";

import FeedView from "../components/Feed/FeedView-Container";
import Reducer, { initialState } from "../components/Feed/Feed-reducer";
import { fetchPost } from "../components/Feed/Feed-action";
import { dispatchTypes } from "../components/Feed/Feed-constants";
export default function Feed() {
	const [{ data, metadata, loading, called, error }, dispatch] = useReducer(
		Reducer,
		initialState
	);

	const {page, limit, total} = metadata;
	const [refreshing, setRefreshing] = useState(false);

	
	async function refreshList() {
		setRefreshing(true);
		dispatch({
			type: dispatchTypes.RESET
		})
		await fetchPost(dispatch, {page:1, limit: 4, loading, total: 0 });

		setRefreshing(false);
	}

	useEffect(() => {
		fetchPost(dispatch, {page:1, limit: 4, loading, total });
	}, []);

	return (
		<FeedView
			loading={loading}
			data={data}
			onReached={() => fetchPost(dispatch, {page, limit, total, loading})}
			refreshing={refreshing}
			onRefresh={refreshList}
		/>
	);
}
