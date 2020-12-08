import React, { useState, useCallback, useEffect } from "react";

import { useReducer } from "react";
import { View, Button, Text } from "react-native";
import { useLogin } from "../login/Login-context";
import { disLike, getLike, postLike } from "./Like-action";
import Reducer, { initialState } from "./Like-reducer";

function LikeButton({ isLike, loading, onClick }) {
	
	return (
		<View>
			<Button
				title={loading ? "Carregando" : isLike ? 'Descurtir' : "Curtir"}
				onPress={onClick}
			/>
		</View>
	);
}

export default LikeButton;
