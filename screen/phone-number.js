import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mask from "../assets/vegetable.png"

export default function PhoneNumber() {

    const nav = useNavigation();
    return (
        <View style={style.container}>
            <Image source={mask} style={style.images} />
            <Text style={style.text}>Get your groceries with nectar</Text>
            <TouchableOpacity style={style.phone}
                onPress={()=>{nav.navigate('signin')}}>
                <Text style={style.textPhone}>Enter your Phone Number</Text>
            </TouchableOpacity>
            <Text style={style.more}>Or connect with social media</Text>
            <TouchableOpacity style={style.buttonGoogle}>
                <Text style={style.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonFacebook}>
                <Text style={style.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
        </View>

    );
};
const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white" },
    images: { width: "100%", height: "45%", borderRadius: 100, marginTop: 80 },
    text: { fontSize: 25, fontSize: 30, marginBottom: 20, marginLeft: 30, marginTop: 30, width: "60%" },
    textPhone: { color: "grey", fontSize: 18, borderBottomWidth: 0.5, borderBottomColor: "grey", paddingBottom: 5, marginBottom: 10, marginLeft: 30, width: "80%" },
    more: { fontSize: 12, color: "grey", marginLeft: 100, marginBottom: 20 },
    buttonGoogle: { backgroundColor: '#95a5a6', padding: 15, borderRadius: 5, marginTop: 20, width: '80%', marginLeft: 40, alignItems: "center" },
    buttonFacebook: { backgroundColor: '#1877F2', padding: 15, borderRadius: 5, marginTop: 10, width: '80%', marginLeft: 40, alignItems: "center" },
    buttonText: {
        color: 'white', fontSize: 16, fontWeight: 'bold'
    }

})

