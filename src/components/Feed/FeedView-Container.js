import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";

import { Container, Loading } from "../../baseCSS/styles";
import FeedItem from "./FeedItem";

export default function Feed({
	data = [],
	loading = false,
	scenary = 'feed',
	onRefresh,
	refreshing,
	onReached,
}) {
	const [viewable, setViewable] = useState([]);

	const handleViewableChanged = useCallback(({ changed }) => {
		setViewable(changed.map(({ item }) => item.id));
	}, []);

	return (
		<Container>
			<FlatList
				key="list"
				data={data}
				keyExtractor={(item) => String(item.id)}
				renderItem={(item) => <FeedItem item={item.item} viewable={viewable} />}
				ListFooterComponent={loading && <Loading />}
				onViewableItemsChanged={handleViewableChanged}
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 10,
				}}
				showsVerticalScrollIndicator={false}
				onRefresh={onRefresh}
				refreshing={refreshing}
				onEndReachedThreshold={0.3}
				onEndReached={onReached}
			/>
		</Container>
	);
}
