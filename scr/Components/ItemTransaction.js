import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
function ItemTransaction({item}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>{ navigation.navigate("DetailTransaction",{item})}} style={{ flexDirection: 'row', marginVertical: 5, marginHorizontal: 25, borderWidth: 1, borderColor: '#FCFCFC', backgroundColor: '#FCFCFC', padding: 5 }}>
            <View style={{ backgroundColor: '#FCEED4', padding: 10, borderRadius: 10 }}>
                <FontAwesome6 name='bowl-food' size={30} color='#FCAC12' />
            </View>
            <View style={{ flexDirection: 'column', marginStart: 10 }}>
                <Text style={{ fontSize: 18, marginBottom: 9, fontWeight: 'bold', color: '#000' }}>{item.category}</Text>
                <Text style={{ fontSize: 15 }}>{item.description}</Text>
            </View>
            <View style={{ flexDirection: 'column', marginStart: 'auto' }}>
                {
                    item.typeTransaction == "add" ?
                        <Text style={{ fontSize: 18, marginBottom: 9, color: 'green', fontWeight: 'bold' }}>+{item.money}</Text> :
                        <Text style={{ fontSize: 18, marginBottom: 9, color: 'red', fontWeight: 'bold' }}>-{item.money}</Text>
                }
                <Text style={{ fontSize: 15 }}>{item.date.getHours()}:{item.date.getMinutes()}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ItemTransaction;