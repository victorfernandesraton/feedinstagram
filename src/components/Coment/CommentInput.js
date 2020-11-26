import React, { useCallback, useReducer, useState } from "react";
import { Button, Text, View } from "react-native";
import { Post } from "../Feed/style";
import { postComment } from "./Comment-action";
import Reducer, { initialState } from "./Comment-reducer";
import {
	CommentInputButton,
	CommentInputButtonText,
	CommentInputContainer,
	CommentTextInput,
} from "./style";

const CommentInput = ({ parent, onPost, total }) => {
	const [content, setContent] = useState("");
	const [{ loading }, dispatch] = useReducer(Reducer, initialState);

	const sendComment = useCallback(async () => {
		setContent("");
		const response = await postComment(dispatch, {
			author: { id: 1 },
			content,
			parent: 1,
		});
		if (onPost) {
			onPost(response);
		}
	}, [onPost, parent]);

	return (
		<CommentInputContainer>
			<CommentTextInput
				editable={!loading}
				value={content}
				onChangeText={(text) => {
					setContent(text);
				}}
				placeholder={total > 0 ? "Commente aqui" : "Seja o primeiro a comentar"}
			/>
			<CommentInputButton disabled={loading} onPress={sendComment}>
				<CommentInputButtonText>Postar</CommentInputButtonText>
			</CommentInputButton>
		</CommentInputContainer>
	);
};

export default CommentInput;
