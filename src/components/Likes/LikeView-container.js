import { Link } from "@react-navigation/native";
import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { Text } from "react-native";

import { Container } from "../../baseCSS/styles";
import { useLogin } from "../login/Login-context";
import { disLike, getLike, postLike } from "./Like-action";
import Reducer, { initialState } from "./Like-reducer";

import LikeButton from "./LikeButton";

const LikeView = ({ item }) => {
	const [{ user }] = useLogin();
	const [{ data, metadata, loading, called }, dispatch] = useReducer(
		Reducer,
		initialState
	);

	const isLike = data.find((i) => i.author.id == user.id);

	const { total } = metadata;
	useEffect(() => {
		if (!loading && !called) {
			getLike(dispatch, {
				limit: 1,
				loading,
				page: 1,
				publicationId: item.id,
				total,
			});
		}
	}, [item]);

	const handleClick = useCallback(() => {
		if (!isLike) {
			postLike(dispatch, {
				loading,
				publicationId: item.id,
				total,
				user,
			});
		} else {
			disLike(dispatch, { id: isLike?.id, loading, total });
		}
	}, [isLike, loading, total]);

	return (
		<Container>
			<LikeButton isLike={isLike} loading={loading} onClick={handleClick} />
			{total > 0 && (
				<Link to={`/likes?id=${item.id}`}>
					<Text>Ver curtidas</Text>
				</Link>
			)}
		</Container>
	);
};

export default LikeView;
