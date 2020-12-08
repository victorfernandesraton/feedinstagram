import React, { useState, useCallback, useEffect } from "react";

import { useReducer } from "react";
import { View, Button, Text } from "react-native";
import { useLogin } from "../login/Login-context";
import { getLike, postLike } from "./Like-action";
import Reducer, { initialState } from "./Like-reducer";

function LikeButton({ postId }) {
	const [{ user }] = useLogin();

	const [{ metadata, loading, called }, dispatch] = useReducer(
		Reducer,
		initialState
	);
	const {total} = metadata

	const handleLike = useCallback(() => {
		console.log(total)
		if (total < 1) {
			postLike(dispatch, {
				publicationId: postId,
				userId: user.id,
				total,
				loading,
			});
		}
	}, [total, postId, user, loading]);

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
				title={loading ? 'Carregando' : !total ? "Curtir" : "Descurtir"}
				onPress={handleLike}
			/>
		</View>
	);
}

export default LikeButton;
