// Load the module

import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, Dimensions, Button } from "react-native";
import { Video } from "expo-av";

const VideoView = ({ uri }) => {
	const { width, height } = Dimensions.get("window");
	const [play , setPlay] = useState(false);
	const handlePlay = useCallback(() => setPlay(!play), [play])

	return (
		<>
			<Video
				source={{
					uri: uri,
				}}
				rate={1.0}
				volume={1.0}
				isMuted={false}
				resizeMode="contain"
				shouldPlay={play}
				isLooping
				style={{ width: width * 0.9, height: height }}
			/>
			<Button title="Iniciar" onPress={handlePlay} />
		</>
	);
};

export default VideoView;

const styles = StyleSheet.create({
	backgroundVideo: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});
