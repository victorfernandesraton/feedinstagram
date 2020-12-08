import styled from "styled-components/native";

export const Container = styled.View``;

export const Loading = styled.ActivityIndicator.attrs({
	size: "small",
	color: "#999",
})`
	margin: 32px 0;
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
