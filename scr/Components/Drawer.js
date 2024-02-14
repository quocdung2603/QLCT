import React from "react";
import { View,Text, Alert } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const DrawerList = [
    {icon: 'home-outline', label: 'Home', navigateTo: 'Home'},
    {icon: 'bookshelf', label: 'Schedule', navigateTo: 'Schedule'},
  ];
const DrawerL=()=>{
    const navigation = useNavigation();
    const handleClick=(link)=>{
        navigation.navigate(link);
    }
    return <View>
        {
            DrawerList.map((it, index) => (
                <TouchableOpacity
                key={index}
                style={{ backgroundColor: "blue", height: 50, marginTop: 5 }}
                onPress={() => handleClick(it.navigateTo)}
                >
                <Text>
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
            <Text>Đây sẽ là profile</Text>
            {
                DrawerL()
            }
            </DrawerContentScrollView>
        </View>
     );
}

export default Drawer;