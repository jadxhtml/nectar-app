import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import logo from "../assets/logo1.png"
import { Ionicons } from "@expo/vector-icons";


export default function LoginScreen() {
    const nav = useNavigation();
    return (
        <View style={style.container}>
            <Image source={logo} style={style.logo} />
            <View>
                <Text style={style.text1}>Login</Text>
                <Text style={style.text2}>Enter your emails and password</Text>
            </View>
            <View>
                <Text style={style.emailText}>Email</Text>
                <TextInput placeholder="Email" keyboardType="email-address" style={style.input} />
            </View>
            <View>
                <Text style={style.passwordText}>Password</Text>
                <TextInput placeholder="Password" secureTextEntry={true} style={style.input} />
            </View>
            <TouchableOpacity style={style.forgotPassword}>
                <Text style={style.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.loginButton} onPress={() => nav.navigate('home')}>
                <Text style={style.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View>
                <Text style={style.signupText}>Don't have an account? <TouchableOpacity onPress={()=>nav.navigate('signup')}><Text style={style.signupLink} onPress={() => nav.navigate('signup')}>Sign Up</Text></TouchableOpacity></Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {flex: 1, backgroundColor: "white"},
    logo: {width: 100, height: 100, marginTop: 100, borderRadius: 50, justifyContent: "center", alignSelf: "center"},
    text1: {fontSize: 30, marginLeft: 20, marginTop: 30, fontWeight: "bold"},
    text2: {fontSize: 15, marginLeft: 20, marginTop: 10, color: "grey"},
    emailText: {fontSize: 20, marginLeft: 20, marginTop: 10, color: "grey"},
    input: {margin: 20, paddingBottom: 5, fontSize: 20, borderBottomColor: "grey", borderBottomWidth: 0.5, width: "90%"},
    passwordText: {fontSize: 20, marginLeft: 20, marginTop: 10, color: "grey"},
    forgotPassword: {alignSelf: "flex-end", marginRight: 20, marginTop: 10},
    forgotPasswordText: {color: "green", fontSize: 15},
    loginButton: {backgroundColor: "green", padding: 15, borderRadius: 15, marginTop: 20, width: '80%', marginLeft: 40, alignItems: "center"},
    loginButtonText: {color: 'white', fontSize: 16, fontWeight: 'bold'},
    signupText: {fontSize: 15, marginLeft: 20, marginTop: 30, color: "grey"},
    signupLink: {color: "green", fontSize: 15, fontWeight: "bold"}
})