import React from "react";
import { Container } from "../baseCSS/styles";

import LikeList from "../components/Likes/LikeList";

export default function Like({ route }) {
	const id = route?.params?.id;
	return (
		<Container>
			<LikeList publicationId={id} />
		</Container>
	);
}
