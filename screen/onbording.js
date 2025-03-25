import React from "react";
import mck from "../assets/MCK.png";
import { Button, Image, ImageBackground, Text, Touchable, TouchableOpacity, View } from "react-native";
import phoneNumber from "./phone-number";
import { useNavigation } from "@react-navigation/native";

export default function Onbording(){
    const nav = useNavigation();
    return (
        <View style={{
            backgroundColor: "#2ed573",
            flex: 1
        }}>
            <Text style={{
                textAlign: "center",
                fontSize: 40,
                marginTop: 500,
                color: "white"
            }}>Welcome to our store</Text>
            <Text style={{
                textAlign: "center",
                color: "white"
            }}>Ger your groceries in as fast as one hour</Text>
            <TouchableOpacity onPress={()=>nav.navigate('phoneNumber')} style={{
                width: "50%",
                marginLeft: 90,
                alignItems: "center",
                padding: 20,
                backgroundColor: "#20bf6b",
                borderRadius: 20,
                marginTop: 20

            }}>
                <Text style={{
                    color: "white",
                    fontSize: 20
                }}>Get Started</Text>
            </TouchableOpacity>

        </View>
    )
}