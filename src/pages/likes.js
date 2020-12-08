import React, { useCallback, useEffect, useReducer } from "react";
import { View } from "react-native";

import LikeList from "../components/Likes/LikeList";

export default function Like({ route }) {
	const id = route?.params?.id;
	console.log(route)
	return (
		<View>
			<LikeList publicationId={id} />
		</View>
	);
}
