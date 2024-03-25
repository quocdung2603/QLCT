import React from "react";
import { View,Text, Alert } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const DrawerList = [
    {icon: 'home-outline', label: 'Home', navigateTo: 'Home'},
    {icon: 'bookshelf', label: 'Schedule', navigateTo: 'Schedule'},
    {icon: 'bookshelf', label: 'Health', navigateTo: 'Health'},
];
const DrawerL=()=>{
    const navigation = useNavigation();
    const handleClick=(link)=>{
        navigation.navigate(link);
    }
    return <View style={{flex:1}}>
        {
            DrawerList.map((it, index) => (
                <TouchableOpacity
                key={index}
                style={{ backgroundColor: "#7F3DFF", justifyContent:'center', alignContent:'center',marginVertical:2, marginHorizontal:5, padding:10, borderRadius:20 }}
                onPress={() => handleClick(it.navigateTo)}
                >
                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>
                    {it.label}
                </Text>
                </TouchableOpacity>
            ))
        }
    </View>
}
function Drawer(props) {
    return ( 
        <View style={{height: '100%'}}>
            <DrawerContentScrollView>
            <Text></Text>
            {
                DrawerL()
            }
            </DrawerContentScrollView>
        </View>
    );
}

export default Drawer;