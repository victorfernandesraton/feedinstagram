import React from "react";
import { Avatar, Description, Header, Name, Post, BasicText } from "./style";
import LazyImage from "../LazyImage";
import { Button, TextInput } from "react-native";
export const FeedItem = ({ item, viewable }) => {
	return (
		<Post>
			<Header>
				<Avatar source={{ uri: item.author.avatar }} />
				<Name>{item.author.name}</Name>
			</Header>

			<LazyImage
				aspectRatio={item.aspectRatio}
				shouldLoad={viewable?.includes(item.id)}
				smallSource={{ uri: item.small }}
				source={{ uri: item.image }}
			/>

			<Description>
				<Name>{item.author.name}</Name> {item.description}
			</Description>
			<Description>{[]}</Description>

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
