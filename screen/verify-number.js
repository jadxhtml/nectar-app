import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {Text, Image, View, TouchableOpacity, StyleSheet, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function VerifyNumber(){

    const nav = useNavigation();
    return (
        <View style={style.container}>
            <TouchableOpacity>
                <Ionicons name="arrow-back" style={style.arrowBack} onPress={()=>nav.goBack()}/>
            </TouchableOpacity>
            <Text style={style.text}>Enter your 4-digit code</Text>
            <TextInput placeholder="Code" keyboardType="numeric" secureTextEntry={true} style={style.phoneInput}/>
            <TouchableOpacity>
                <Ionicons name="arrow-forward" style={style.arrowNext} />
            </TouchableOpacity>
        </View>
    )
};

const style = StyleSheet.create({
    container: {  flex: 1, paddingHorizontal: 20, backgroundColor: "white",},
    arrowBack: {marginTop: 70, fontSize: 30, color: "black",},
    text: {fontSize: 30, marginLeft: 20, marginTop: 30},
    phoneInput: {margin: 20, paddingBottom: 5, fontSize: 20, borderBottomColor: "grey", borderBottomWidth: 0.5, width: "90%"},
    arrowNext: {alignSelf: "flex-end", backgroundColor: "green", padding: 12, borderRadius: 25, color: "white", fontSize: 20 }
})