import React, { useCallback, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/MaterialIcons";

import { VideoContainer, VideoControl } from "./style";

const VideoView = ({ uri }) => {
	const { width } = Dimensions.get("window");
	const [play, setPlay] = useState(false);
	const [muted, setMuted] = useState(false);

	const handlePlay = useCallback(() => setPlay(!play), [play]);
	const handleMuted = useCallback(() => setMuted(!muted), [muted]);

	return (
		<VideoContainer>
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
				style={{ width, height: 300 }}
			/>
			<VideoControl>
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
			</VideoControl>
		</VideoContainer>
	);
};
export default VideoView;
