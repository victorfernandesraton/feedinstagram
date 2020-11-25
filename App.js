import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Feed from "./src/pages/feed";
import Login from "./src/pages/login";
import { LoginProvider } from "./src/components/login/Login-context";

const Stack = createStackNavigator();

export default function App() {
	return (
		<LoginProvider>
			<View style={style.container}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="login">
						<Stack.Screen name="feed" component={Feed} />
						<Stack.Screen name="login" component={Login} />
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		</LoginProvider>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
