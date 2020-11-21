import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import {
	Container,
	Loading,
} from "../../baseCSS/styles";
import { FeedItem } from "../../components/Feed/FeedItem";

export default function Feed() {
	const [, setError] = useState("");
	const [feed, setFeed] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [viewable, setViewable] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	
	async function loadPage(pageNumber = page, shouldRefresh = false) {
		if (pageNumber === total) return;
		if (loading) return;

		setLoading(true);
		//http://localhost:3000/feed?_expand=author&_limit=4&_page=1
		//utilizar server.js no jsonserver
		//https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=1&limit=4
		//utilizar o server2.js no www.mockapi.io
		axios
			.get(
				`https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=${pageNumber}&limit=4`
			)
			.then((response) => {
				const totalItems = response.headers["x-total-count"];
				const data = response.data;
				//console.log(data)
				setLoading(false);
				setTotal(Math.floor(totalItems / 4));
				setPage(pageNumber + 1);
				setFeed(shouldRefresh ? data : [...feed, ...data]);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}

	async function refreshList() {
		setRefreshing(true);

		await loadPage(1, true);

		setRefreshing(false);
	}



	useEffect(() => {
		loadPage();
	}, []);

	const handleViewableChanged = useCallback(({ changed }) => {
		setViewable(changed.map(({ item }) => item.id));
	}, []);

	return (
		<Container>
			<FlatList
				key="list"
				data={feed}
				keyExtractor={(item) => String(item.id)}
				renderItem={(item) => <FeedItem item={item.item} viewable={viewable} />}
				ListFooterComponent={loading && <Loading />}
				onViewableItemsChanged={handleViewableChanged}
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 10,
				}}
				showsVerticalScrollIndicator={false}
				onRefresh={refreshList}
				refreshing={refreshing}
				onEndReachedThreshold={0.1}
				onEndReached={() => loadPage()}
			/>
		</Container>
	);
}
