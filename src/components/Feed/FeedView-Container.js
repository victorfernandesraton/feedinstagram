import React, { useCallback, useState } from "react";
import { FlatList, Text } from "react-native";

import { Container, Loading } from "../../baseCSS/styles";
import FeedItem from "./FeedItem";

export default function Feed({
	data = [],
	loading = false,
	scenary = "feed",
	onRefresh,
	onReached,
	refreshing,
}) {
	const [viewable, setViewable] = useState([]);

	const handleViewableChanged = useCallback(({ changed }) => {
		setViewable(changed.map(({ item }) => item.id));
	}, []);

	return (
		<Container>
			<FlatList
				data={Array.from(new Set(data))}
				keyExtractor={(item) => String(item.id)}
				renderItem={(item) => (
					<FeedItem item={item.item} viewable={viewable} scenary={scenary} />
				)}
				ListFooterComponent={loading && <Loading />}
				onViewableItemsChanged={handleViewableChanged}
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 10,
				}}
				showsVerticalScrollIndicator={false}
				onRefresh={onRefresh}
				maxToRenderPerBatch={10}
				refreshing={refreshing}
				onEndReachedThreshold={0.3}
				onEndReached={onReached ? onReached : () => false}
			/>
		</Container>
	);
}
