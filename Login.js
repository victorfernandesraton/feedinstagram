import React, { Component } from 'react'
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default class Login extends Component {

    clicou = () => {
        Alert.alert("Você fez login", "Usuario e senha estão corretos!");
    }


    render() {
        return (
            <View style={styles.container}>
               
               <Image 
                    source={require('../assets/instagram-logo-5.png')}
                    style={styles.logo}
               />
               
            <TextInput
                style={style.input}
                placeholder="Digite seu e-mail"

            />

            <TextInput
                style={style.input}
                secureTextEntry={true}
                placeholder="Digite sua senha"

            />

            <TouchableOpacity
                style={styles.botao}
                onPress={ () => {this.clicou()} }
            >

                    <Text style={styles.botaoText}>Login</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    input: {
        marginTop: 10,
        width: 300,
        backgroundColor: 'edf6f9',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },
    botao: {
        width: 300,
        height:42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    }
})