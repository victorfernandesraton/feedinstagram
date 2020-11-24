import styled from "styled-components/native";

export const Container = styled.View``;

export const Loading = styled.ActivityIndicator.attrs({
	size: "small",
	color: "#999",
})`
	margin: 32px 0;
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
