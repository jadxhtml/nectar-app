import React from "react";
import {Text, Image, View, TouchableOpacity, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import location from "../assets/locationImage.png"
import DropDownPicker from "react-native-dropdown-picker";

export default function SelectLocation(){
    const nav = useNavigation();

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        {label: 'Ha Noi', value: 'hn'},
        {label: 'Hai Phong', value: 'hp'},
        {label: 'Thanh Hoa', value: 'th'},
        {label: 'Dien Bien', value: 'db'},
        {label: 'Tuyen Quang', value: 'tq'},
    ]);

    const [open1, setOpen1] = React.useState(false);
    const [value1, setValue1] = React.useState(null);
    const [items1, setItems1] = React.useState([
        {label: 'Thanh pho', value: 'tp'},
        {label: 'Nong thon', value: 'nt'},
    ]);

    return (
        <View style={style.container}>
            <Ionicons name="arrow-back" style={style.arrowBack} onPress={()=>nav.goBack()}/>
            <Image source={location} style={style.imageLocation}/>
            <View>
                <Text style={style.textLocation}>Select Your Location</Text>
                <Text style={style.textLocation2}>Switch on your location to stay in tune with what’s happening in your area</Text>
            </View>
            <View style={style.dropDownWrap1}>
                <Text style={style.tittleDropDown1}>Your Zone</Text>
                <DropDownPicker
                    style={style.dropDown1}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select your location"
                    dropDownContainerStyle={{zIndex: 2000}}  
                />
            </View>
            <View style={style.dropDownWrap2}>
                <Text style={style.tittleDropDown1}>Your Address</Text>
                <DropDownPicker
                    style={style.dropDown2}
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    placeholder="Select your location"
                    dropDownContainerStyle={{zIndex: 0}}  
                />
            </View>
            <TouchableOpacity style={style.buttonSubmit} onPress={()=>nav.navigate('login')}>
                <Text style={style.buttonText}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    container: {backgroundColor: "white", flex: 1, paddingHorizontal: 20,},
    arrowBack: {marginTop: 70, marginLeft: 20, fontSize: 30, color: "black",},
    imageLocation: {width: 300, height: 250, borderRadius: 70, alignSelf: "center"},
    textLocation: {fontSize: 30, marginLeft: 20, marginTop: 10, alignSelf: "center"},
    textLocation2: {fontSize: 15, marginLeft: 20, marginTop: 10, alignSelf: "center", color: "grey"},
    tittleDropDown1: {fontSize: 20, marginLeft: 20, marginTop: 30, alignSelf: "flex-start", color: "grey"},
    dropDown1: {width: 330, height: 50, marginLeft: 10, borderWidth: 0.5, borderColor: "white", borderBottomColor: "grey", borderRadius: 0, backgroundColor: "white"},
    dropDown2: {width: 330, height: 50, marginLeft: 10, borderWidth: 0.5, borderColor: "white", borderBottomColor: "grey", borderRadius: 0, backgroundColor: "white"},
    dropDownWrap1: {zIndex: 1000},
    dropDownWrap2: {zIndex: 900},
    buttonSubmit: {backgroundColor: "green", padding: 15, borderRadius: 15, marginTop: 20, width: '80%', marginLeft: 40, alignItems: "center"},
    buttonText: {color: 'white', fontSize: 16, fontWeight: 'bold'}
})