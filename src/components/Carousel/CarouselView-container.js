import React, { useCallback, useRef, useState } from "react";
import { FlatList } from "react-native";
import LazyImage from "../LazyImage";

export default function CarouselVeiw({}) {
	const [index] = useState(0);
	const indexRef = useRef(index);
	indexRef.current = index;

	const [viewable, setViewable] = useState([]);

	const handleViewableChanged = useCallback(({ changed }) => {
		setViewable(changed.map(({ item }) => item.id));
	}, []);

	const mock = [
		{
			id: 1,
			media:
				"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg",
			small:
				"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/1.jpeg",
			aspectRatio: 0.834,
		},
		{
			id: 2,
			media:
				"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/2.jpeg",
			small:
				"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/2.jpeg",
			aspectRatio: 0.834,
		},
		{
			id: 3,
			media:
				"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/3.jpeg",
			small:
				"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/3.jpeg",
			aspectRatio: 0.834,
		},
		{
			id: 4,
			media:
				"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/2.jpeg",
			small:
				"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/small/2.jpeg",
			aspectRatio: 0.834,
		},
	];

	return (
		<FlatList
			data={mock}
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
