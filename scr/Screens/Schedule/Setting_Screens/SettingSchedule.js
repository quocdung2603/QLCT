import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
const SettingSchedule = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', padding: 10 }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Cài đặt</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='bells' size={30} color='black' />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Currency</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginStart: 'auto', color: 'grey', marginEnd: 10 }}>USD</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Language</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginStart: 'auto', color: 'grey', marginEnd: 10 }}>English</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Theme</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginStart: 'auto', color: 'grey', marginEnd: 10 }}>Light</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Security</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginStart: 'auto', color: 'grey', marginEnd: 10 }}>PIN</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Notification</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    {/* <Text style={{fontSize:18, marginStart:'auto', color:'grey', marginEnd:10}}>PIN</Text> */}
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
        </View>
    );
}

export default SettingSchedule