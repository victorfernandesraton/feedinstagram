import styled from "styled-components/native";

export const LikeListItemContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const LikesViewContainer = styled.View`
	display: flex;
	width: 70%;
	justify-content: space-evenly;
	flex-direction: row;
	align-items: center;
	margin: 16px 8px;
`;

export const LinkLabel = styled.Text`
	font-size: ${(props) => (props?.scenary === "feed" ? '16px' : '12px')};
`;
export const LikeLink = styled.Text`
	margin-left: 8px;
	font-size: ${(props) => (props?.scenary === "feed" ? '16px' : '12px')};
	text-decoration: underline;
	text-decoration-style: solid;
`;

export const LikeMoreContainer = styled.TouchableOpacity`
	display: flex;
	background-color: #dcdcdc;
	border-radius: 2px;
	margin: 16px;
	justify-content: center;
	flex-direction: row;
	align-items: center;
`;

export const 	LikeMoreText = styled.Text`
	font-size: 16px;
	padding: 16px;
`;
