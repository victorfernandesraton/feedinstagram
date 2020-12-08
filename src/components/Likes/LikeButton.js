import React from "react";

import { View, Button } from "react-native";

function LikeButton({ isLike, loading, onClick }) {
	return (
		<View>
			<Button
				title={loading ? "Carregando" : isLike ? "Descurtir" : "Curtir"}
				onPress={onClick}
			/>
		</View>
	);
}

export default LikeButton;
