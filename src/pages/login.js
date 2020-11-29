import React, { useState, useCallback } from "react";
import {
	Text,
	StyleSheet,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useLogin } from "../components/login/Login-context";
import { handleValidation } from "../components/login/Login-utils";
import { apiMock } from "../utils/request";

export default Login = () => {
	const { navigate } = useNavigation();
	const [login, setLogin] = useLogin();
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [error, setError] = useState({});

	const handleLogin = useCallback(() => {
		const [emailValid, passValid] = handleValidation(
			{ email, pass },
			{ error, setError }
		);
		if (emailValid && passValid) {
			apiMock
				.get(`/user?mail=${email}`)
				.then((data) => {
					if (data?.data?.count == 0) {
						setError({ api: "Email não encontrado" });
					} else {
						if (data?.data?.items?.[0]?.password === pass) {
							setLogin({ logged: true, user: { ...data?.data?.items?.[0] } });
							navigate("feed");
						} else {
							setError({ api: "Senha inválida" });
						}
					}
				})
				.catch((error) => {
					setError({ api: "Houve um erro, tente novamente mais tarde" });
				});
		}
	}, [error, email, pass]);

	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/instagram-logo-5.png")}
				style={styles.logo}
			/>

			<TextInput
				style={styles.input}
				placeholder="Digite seu e-mail"
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			{/* Mensagen de erro */}
			{error.email && <Text>{error.email}</Text>}

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				placeholder="Digite sua senha"
				value={pass}
				onChangeText={(text) => setPass(text)}
			/>
			{error.pass && <Text>{error.pass}</Text>}

			<TouchableOpacity style={styles.botao} onPress={handleLogin}>
				<Text style={styles.botaoText}>Login</Text>
			</TouchableOpacity>

			{error.api && <Text>{error.api}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fefefe",
	},
	logo: {
		width: 150,
		height: 150,
		borderRadius: 10,
	},
	input: {
		marginTop: 16,
		width: 312,
		height: 24,
		backgroundColor: "#edf6f9",
		fontSize: 16,
		fontWeight: "bold",
		borderRadius: 8,
	},
	botao: {
		width: 256,
		height: 42,
		backgroundColor: "#3498db",
		marginTop: 32,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	botaoText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffff",
	},
});
