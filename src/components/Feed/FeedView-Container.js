import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";

import { Container, Loading } from "../../baseCSS/styles";
import FeedItem from "./FeedItem";

export default function Feed({
	data = [],
	loading = false,
	scenary = 'feed',
	onRefresh,
	onReached,
}) {
	const [viewable, setViewable] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const handleViewableChanged = useCallback(({ changed }) => {
		setViewable(changed.map(({ item }) => item.id));
	}, []);

	return (
		<Container>
			<FlatList
				data={data}
				keyExtractor={(item) => String(item.id)}
				renderItem={(item) => <FeedItem item={item.item} viewable={viewable} scenary={scenary} />}
				ListFooterComponent={loading && <Loading />}
				onViewableItemsChanged={handleViewableChanged}
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 10,
				}}
				showsVerticalScrollIndicator={false}
				onRefresh={() => {
					setRefreshing(true)
					if (onRefresh) {
						onRefresh()
					}
					setRefreshing(false)
				}}
				refreshing={refreshing}
				onEndReachedThreshold={0.3}
				onEndReached={onReached}
			/>
		</Container>
	);
}
