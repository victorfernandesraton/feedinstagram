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
	font-size: 32;
	line-height: 32;
	color: #333333;
	padding: 16;
	padding-top: 16;
	min-height: 168;
	border-top-width: 1;
	border-color: rgba(212, 211, 211, 0.3);
`;

export const CommentTextInput = styled.TextInput`
	display: flex;
	/* margin: 16, 2; */
	border-color: #c4c4;
	width: 312;
	height: 54;
	/* width: "90%"; */
	font-size: 24;
`;
