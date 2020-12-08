import styled from "styled-components/native";

export const Post = styled.View`
	margin-top: 8px;
`;

export const Header = styled.View`
	padding: 16px;
	flex-direction: row;
	align-items: center;
`;

export const Avatar = styled.Image`
	width: 32px;
	height: 32px;
	border-radius: 16px;
	margin-right: 8px;
`;

export const Name = styled.Text`
	font-weight: 600;
`;

export const Description = styled.Text`
	padding: 16px;
	line-height: 21px;
`;

export const BasicText = styled.Text`
	font-size: 32px;
	line-height: 32px;
	color: #333333;
	padding: 16px;
	padding-top: 16px;
	min-height: 168px;
	border-top-width: 1;
	border-color: rgba(212, 211, 211, 0.3);
`;

export const CommentTextInput = styled.TextInput`
	display: flex;
	border-color: #c4c4;
	width: 90%;
	padding: 8px;
	height: ${(props) => (props.height > 32 ? props.height : 32)};
	margin: 8px;
	background-color: #c2c2c2;
	border-radius: 16px;
	font-size: 16px;
	text-align: justify;
	align-self: center;
`;

export const CommentInputContainer = styled.View`
	display: flex;
	flex-direction: row;
	height: 40px;
	margin: 8px;
	width: 90%;
`;

export const CommentInputButton = styled.TouchableOpacity`
	display: flex;
	height: 32px;
	margin-left: 8px;
	/* width: 25%; */
	align-self: center;
`;

export const CommentInputButtonText = styled.Text`
	color: #fafafa;
	font-size: 16px;
`;

export const CommentMoreContainer = styled.TouchableOpacity`
	display: flex;
	background-color: #dcdcdc;
	border-radius: 2px;
	margin: 16px;
	justify-content: center;
	flex-direction: row;
	align-items: center;
`;

export const CommentMoreText = styled.Text`
	font-size: 16px;
	padding: 16px;
`;
