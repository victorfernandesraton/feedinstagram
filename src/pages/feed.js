import React, { useEffect, useReducer } from "react";

import FeedView from "../components/Feed/FeedView-Container";
import Reducer, { initialState } from "../components/Feed/Feed-reducer";
import { fetchPost } from "../components/Feed/Feed-action";
import { dispatchTypes } from "../components/Feed/Feed-constants";
export default function Feed() {
	const [{ data, metadata, loading }, dispatch] = useReducer(
		Reducer,
		initialState
	);

	const { page, limit, total } = metadata;

	async function refreshList() {
		dispatch({
			type: dispatchTypes.RESET,
		});
		await fetchPost(dispatch, { page: 1, limit: 4, loading, total: 0 });
	}

	useEffect(() => {
		fetchPost(dispatch, { page: 1, limit: 4, loading, total });
	}, []);

	return (
		<FeedView
			key={"list"}
			loading={loading}
			data={data}
			onReached={() => fetchPost(dispatch, { page, limit, total, loading })}
			onRefresh={() => refreshList}
		/>
	);
}
