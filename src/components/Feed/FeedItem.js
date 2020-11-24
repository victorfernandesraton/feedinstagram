import React from "react";
import { Avatar, Description, Header, Name, Post, BasicText } from "./style";
import LazyImage from "../LazyImage";
import { Button, TextInput } from "react-native";
import authorJSON from '../../mocks/user.json'
export default FeedItem = ({ item, viewable }) => {
	const author = authorJSON.find(i => i.id == item.author);
	return (
		<Post>
			<Header>
				<Avatar source={{ uri: author.avatar }} />
				<Name>{author.name}</Name>
			</Header>

			<LazyImage
				aspectRatio={item.aspectRatio}
				shouldLoad={viewable?.includes(item.id)}
				smallSource={{ uri: item.small }}
				source={{ uri: item.media }}
			/>

			<Description>
				<Name>{item.author.name}</Name> {item.description}
			</Description>

			{/* TODO Criar comentário component */}
			{/* <TextInput
				multiline={true}
				onChangeText={(text) => setText(text)}
				placeholder={"Comentários"}
				style={BasicText}
				maxLength={250}
				value={text}
			/> */}

			{/* <Button
				title="Salvar"
				onPress={() => onSave(String(item.id))}
				accessibilityLabel="Salvar"
			></Button> */}
		</Post>
	);
};
