import React, { useReducer, useState } from "react";
import { Button, View } from "react-native";
import { Post } from "../Feed/style";
import { postComment } from "./Comment-action";
import Reducer, { initialState } from "./Comment-reducer";
import { CommentTextInput } from "./style";

const CommentInput = ({ parent, onPost }) => {
	const [content, setContent] = useState("");
	const [{ loading, called, data }, dispatch] = useReducer(
		Reducer,
		initialState
	);

	return (
		<>
			<CommentTextInput
				editable={!loading}
				value={content}
				onChangeText={(text) => {
					setContent(text);
				}}
			/>
			<Button
				title="postar"
				disabled={loading}
				onPress={() => {
					setContent("");
					postComment(dispatch, { author: { id: 1 }, content, parent: 1 }).then(
						(data) => {
							onPost(data);
						}
					);
				}}
			/>
		</>
	);
};

export default CommentInput;
