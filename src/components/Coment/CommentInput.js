import React, { useCallback, useReducer, useState } from "react";
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
	const [textHeight , setTextHeight] = useState(40);
	const [{ loading }, dispatch] = useReducer(Reducer, initialState);

	const sendComment = useCallback(
		async (content) => {
			const response = await postComment(dispatch, {
				author: { id: 1 },
				content: content,
				parent,
			});
			if (onPost) {
				onPost(response);
			}
			setContent("");
		},
		[onPost, parent]
	);

	return (
		<CommentInputContainer>
			<CommentTextInput
				editable={!loading}
				value={content}
				multiline
				height={textHeight}
				onContentSizeChange={(e) => setTextHeight(e.nativeEvent.contentSize.height)}
				onChangeText={(text) => {
					setContent(text);
				}}
				placeholder={total > 0 ? "Commente aqui" : "Seja o primeiro a comentar"}
			/>
			<CommentInputButton
				disabled={loading}
				onPress={() => sendComment(content)}
			>
				<CommentInputButtonText>Postar</CommentInputButtonText>
			</CommentInputButton>
		</CommentInputContainer>
	);
};

export default CommentInput;
