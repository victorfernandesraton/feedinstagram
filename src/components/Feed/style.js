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
	border-top-width: 1px;
	border-color: rgba(212, 211, 211, 0.3);
`;
