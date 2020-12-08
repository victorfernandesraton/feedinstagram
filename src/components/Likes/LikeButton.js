import React, { useState, useCallback, useEffect } from "react";

import { useReducer } from "react";
import { View, Button, Text } from "react-native";
import { useLogin } from "../login/Login-context";
import { getLike } from "./Like-action";
import Reducer, { initialState } from "./Like-reducer";

function LikeButton({ postId }) {
	const [{ user }] = useLogin();

	const [{ data, loading, called }, dispatch] = useReducer(
		Reducer,
		initialState
	);

	useEffect(() => {
		if (user.id && postId && !loading && !called) {
			getLike(dispatch, {
				publicationId: postId,
				page: 1,
				limit: 1,
				userId: user.id,
			});
		}
	}, [user, postId]);

	return (
		<View>
			<Button
				title={!data.length > 0 ? "Curtir" : "Descurtit"}
				// onPress={apertar}
			/>
		</View>
	);
}

export default LikeButton;
