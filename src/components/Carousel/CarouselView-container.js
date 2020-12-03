import React, { useCallback, useRef, useState } from "react";
import { FlatList } from "react-native";
import LazyImage from "../LazyImage";

export default function CarouselVeiw({ data }) {
	const [index] = useState(0);
	const indexRef = useRef(index);
	indexRef.current = index;

	const [viewable, setViewable] = useState([]);

	const handleViewableChanged = useCallback(({ changed }) => {
		setViewable(changed.map(({ item }) => item.id));
	}, []);

	return (
		<FlatList
			data={data}
			keyExtractor={(i, k) => k.toString()}
			onViewableItemsChanged={handleViewableChanged}
			viewabilityConfig={{
				viewAreaCoveragePercentThreshold: 10,
			}}
			renderItem={({ item }) => {
				return (
					<LazyImage
						aspectRatio={item.aspectRatio}
						shouldLoad={viewable?.includes(item.id)}
						smallSource={{ uri: item.small }}
						source={{ uri: item.media }}
					/>
				);
			}}
			ref={indexRef}
			horizontal={true}
		/>
	);
}
