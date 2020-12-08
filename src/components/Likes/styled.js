import styled from "styled-components/native";

export const LikeListItemContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const LikesViewContainer = styled.View`
	display: flex;
	width: 50%;
	justify-content: space-evenly;
	flex-direction: row;
	margin: 16px 8px;
`;

export const LinkLabel = styled.Text`
	font-size: 16;
`
export const LikeLink = styled.Text`
	margin-left: 8px;
	text-decoration: underline;
	text-decoration-style: solid;
`