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
import AsyncStorage from '@react-native-async-storage/async-storage';
const Setting = () => {
    const navigation = useNavigation();
    const handleClear = async () => {
        try {
            await AsyncStorage.clear();
            console.log('Dữ liệu đã được xóa thành công từ AsyncStorage.');
        } catch (error) {
            console.error('Lỗi khi xóa dữ liệu từ AsyncStorage:', error);
        }
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', }}>
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
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Đơn vị tiền tệ</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginStart: 'auto', color: 'grey', marginEnd: 10 }}>Đ</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Ngôn ngữ</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginStart: 'auto', color: 'grey', marginEnd: 10 }}>Tiếng việt</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Giao diện</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginStart: 'auto', color: 'grey', marginEnd: 10 }}>Sáng</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Bảo mật</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ fontSize: 18, marginStart: 'auto', color: 'grey', marginEnd: 10 }}>Mã PIN</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, marginEnd: 'auto', color: '#000' }}>Thông báo</Text>
                <View style={{ marginStart: 'auto', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    {/* <Text style={{fontSize:18, marginStart:'auto', color:'grey', marginEnd:10}}>PIN</Text> */}
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <TouchableOpacity onPress={handleClear} style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginVertical: 20, marginHorizontal: 50, backgroundColor: '#7F3DFF', borderRadius: 20, paddingVertical: 10 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Đặt lại dữ liệu</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Setting