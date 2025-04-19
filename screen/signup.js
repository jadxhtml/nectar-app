import React from "react";
import {Text, Image, View, TouchableOpacity, StyleSheet, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import logo from "../assets/logo1.png"


export default function SignupScreen(){

    const nav = useNavigation();
    return (
        <View style={style.container}>
            <Image source={logo} style={style.logo} />
            <View>
                <Text style={style.text1}>Sign In</Text>
                <Text style={style.text2}>Enter your credentials to continue</Text>
            </View>
            <View>
                <Text style={style.usernameText}>Username</Text>
                <TextInput placeholder="Username" keyboardType="default" style={style.input} />
            </View>
            <View>
                <Text style={style.emailText}>Email</Text>
                <TextInput placeholder="Email" keyboardType="email-address" style={style.input} />
            </View>
            <View>
                <Text style={style.passwordText}>Password</Text>
                <TextInput placeholder="Password" secureTextEntry={true} style={style.input} />
            </View>
            <Text style={style.privacyText}>By continuing you agree to our Terms of Service and Privacy Policy.</Text>
            <TouchableOpacity style={style.signupButton} onPress={() => nav.navigate('home')}>
                <Text style={style.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )
};
const style = StyleSheet.create({
    container: {flex: 1, backgroundColor: "white"},
    logo: {width: 100, height: 100, marginTop: 100, borderRadius: 50, justifyContent: "center", alignSelf: "center"},
    text1: {fontSize: 30, marginLeft: 20, marginTop: 30, fontWeight: "bold"},
    text2: {fontSize: 15, marginLeft: 20, marginTop: 10, color: "grey"},
    usernameText: {fontSize: 20, marginLeft: 20, marginTop: 30, color: "grey"},
    input: {margin: 20, paddingBottom: 5, fontSize: 20, borderBottomColor: "grey", borderBottomWidth: 0.5, width: "90%"},
    emailText: {fontSize: 20, marginLeft: 20, marginTop: 5, color: "grey"},
    passwordText: {fontSize: 20, marginLeft: 20, marginTop: 5, color: "grey"},
    privacyText:{fontSize :15 ,marginLeft :20 ,marginTop :10 ,color :"grey"},
    signupButton:{backgroundColor:"green",padding :15,borderRadius :15,width :'80%',marginLeft :40 ,alignItems :"center",marginTop :30},
    loginButtonText:{color :'white',fontSize :16,fontWeight :'bold'}
})