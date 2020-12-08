import React from "react";

import { View, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function LikeButton({ isLike, loading, onClick, scenary }) {
	return (
		<View>
			<TouchableOpacity
				title={loading ? "Carregando" : isLike ? "Descurtir" : "Curtir"}
				onPress={onClick}
			>
				<Icon
					name={isLike ? "heart" : "hearto"}
					size={scenary == "feed" ? 32 : 26}
					color={"red"}
				/>
			</TouchableOpacity>
		</View>
	);
}

export default LikeButton;
