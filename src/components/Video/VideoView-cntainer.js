// Load the module

import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, Dimensions, Button, View } from "react-native";
import { Video } from "expo-av";

import Icon from "react-native-vector-icons/MaterialIcons";

const VideoView = ({ uri }) => {
	const { width, height } = Dimensions.get("window");
	const [play, setPlay] = useState(false);
	const [muted, setMuted] = useState(false);

	const handlePlay = useCallback(() => setPlay(!play), [play]);
	const handleMuted = useCallback(() => setMuted(!muted), [muted]);

	return (
		<View style={styles.container}>
			<Video
				source={{
					uri: uri,
				}}
				rate={1.0}
				volume={1.0}
				isMuted={false}
				resizeMode="cover"
				shouldPlay={play}
				isLooping
				style={{ width, height: 300}}
			/>
			<View style={styles.controlBar}>
				<Icon
					name={muted ? "volume-mute" : "volume-up"}
					size={45}
					color="white"
					onPress={handleMuted}
				/>
				<Icon
					name={!play ? "pause" : "play-arrow"}
					size={45}
					color="white"
					onPress={handlePlay}
				/>
			</View>
		</View>
	);
};
export default VideoView;

const styles = StyleSheet.create({
	container: {
		 flex: 1,
		 backgroundColor: '#fff',
		 alignItems: 'center',
		 justifyContent: 'center',
	},
	controlBar: {
		 position: 'absolute',
		 bottom: 0,
		 left: 0,
		 right: 0,
		 height: 45,
		 flexDirection: 'row',
		 alignItems: 'center',
		 justifyContent: 'center',
		 backgroundColor: "rgba(0, 0, 0, 0.5)",
	}
});
