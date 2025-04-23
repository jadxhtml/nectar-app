import React from "react";
import {Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import logo from "../assets/logo1.png"
import banner from "../assets/banner.png";
import banana from "../assets/banana.png";
import apple from "../assets/apple.png";
import pineapple from "../assets/pineapple.png";

export default function HomeScreen(){

    const nav = useNavigation();
    return (
        <ScrollView style={style.container}>
            <View>
                <Image source={logo} style={style.logo} />
                <Text style={style.addressText}><Ionicons name= "location" size="20" />  Ha Noi, Viet Nam</Text>
            </View>
            <View style={style.searchBar}>
                <Ionicons name="search" size={20} color="grey" />
                <TextInput placeholder="Search" keyboardType="default" style={style.input} />
            </View>
            <Image source={banner} style={style.banner} />
            <View>
                <View>
                    <Text style={style.exclusiveText}>Exclusive Offers</Text>
                    <TouchableOpacity style={style.seeAllExclusive} />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={style.exclusiveCard}>
                        <Image source={banana} style={style.exclusiveImage} />
                        <Text style={style.exclusiveTitle}>Organic Bananas</Text>
                        <Text style={style.exclusiveDescription}>7pcs for one</Text>
                        <View style={style.bottomCard}>
                            <Text style={style.price}>4.99$</Text>
                            <TouchableOpacity style={style.addToCartButton}>
                                <Text style={style.addButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.exclusiveCard}>
                        <Image source={apple} style={style.exclusiveImage} />
                        <Text style={style.exclusiveTitle}>Red Apple</Text>
                        <Text style={style.exclusiveDescription}>1kg for one</Text>
                        <View style={style.bottomCard}>
                            <Text style={style.price}>4.99$</Text>
                            <TouchableOpacity style={style.addToCartButton}>
                                <Text style={style.addButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.exclusiveCard}>
                        <Image source={pineapple} style={style.exclusiveImage} />
                        <Text style={style.exclusiveTitle}>Pineapple</Text>
                        <Text style={style.exclusiveDescription}>Get 50% off</Text>
                        <View style={style.bottomCard}>
                            <Text style={style.price}>4.99$</Text>
                            <TouchableOpacity style={style.addToCartButton}>
                                <Text style={style.addButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>


        </ScrollView>

    )
}
const style = StyleSheet.create({
    container: {flex: 1, backgroundColor: "white"},
    addressText: {fontSize: 20, marginLeft: 20, marginTop: 10, color: "grey", alignSelf: "center"},
    logo: {width: 50, height: 50, marginTop: 70, borderRadius: 50, justifyContent: "center", alignSelf: "center"},
    searchBar: {flexDirection: "row", backgroundColor: "#f0f0f0", padding: 10, borderRadius: 20, marginHorizontal: 20, marginTop: 20},
    input: {marginLeft: 10, fontSize: 20, width: "90%"},
    banner:{width:"100%", height:"25%", marginTop :10,padding :10, borderRadius: 20, justifyContent :"center", alignSelf :"center"},
    exclusiveText: {fontSize: 30, marginLeft: 20, marginTop: 30, fontWeight: "bold"},
    exclusiveCard: {width: 200, height: 250, backgroundColor: "white", borderRadius: 20, marginLeft: 20, marginTop: 20, padding: 5, borderWidth: 0.5, borderColor: "grey"},
    exclusiveImage: {width: 100, height: 100, borderRadius: 20, justifyContent: "center", alignSelf: "center"},
    exclusiveTitle: {fontSize: 20, marginTop: 10, fontWeight: "bold", textAlign: "center"},
    exclusiveDescription: {fontSize: 15, marginTop: 5, color: "grey", textAlign: "center"},
    bottomCard: {flexDirection: "row", justifyContent: "space-between", marginTop: 5, padding: 20},
    price: {fontSize: 20, marginTop: 10, fontWeight: "bold", textAlign: "center"},
    addToCartButton: {backgroundColor: "green", padding: 10, borderRadius: 20, width: 50, alignSelf: "center", marginTop: 10},
    addButtonText: {color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center"},


})