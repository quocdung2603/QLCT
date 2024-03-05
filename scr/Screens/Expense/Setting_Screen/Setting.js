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
import AsyncStorage from '@react-native-async-storage/async-storage';
const Setting = () =>{
    const navigation = useNavigation();
    const handleClear= async ()=>{
        try {
            await AsyncStorage.clear();
            console.log('Dữ liệu đã được xóa thành công từ AsyncStorage.');
          } catch (error) {
            console.error('Lỗi khi xóa dữ liệu từ AsyncStorage:', error);
          }
    }
    return (    
        <View style={{flex:1, flexDirection:'column', backgroundColor:'white',}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center', margin:10 }}>
                <View style={{ marginRight: 'auto' }}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </View>
                <Text style={{ color: '#000', fontSize: 20, marginEnd: 'auto', fontWeight:'bold' }}>Setting</Text>
            </View>
            <View style={{marginHorizontal:10, marginVertical:12, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize:20, marginEnd:'auto', color:'#000'}}>Currency</Text>
                <View style={{marginStart:'auto',flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <Text style={{fontSize:18, marginStart:'auto', color:'grey', marginEnd:10}}>USD</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{marginHorizontal:10, marginVertical:12, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize:20, marginEnd:'auto', color:'#000'}}>Language</Text>
                <View style={{marginStart:'auto',flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <Text style={{fontSize:18, marginStart:'auto', color:'grey', marginEnd:10}}>English</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{marginHorizontal:10, marginVertical:12, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize:20, marginEnd:'auto', color:'#000'}}>Theme</Text>
                <View style={{marginStart:'auto',flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <Text style={{fontSize:18, marginStart:'auto', color:'grey', marginEnd:10}}>Light</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{marginHorizontal:10, marginVertical:12, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize:20, marginEnd:'auto', color:'#000'}}>Security</Text>
                <View style={{marginStart:'auto',flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <Text style={{fontSize:18, marginStart:'auto', color:'grey', marginEnd:10}}>PIN</Text>
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <View style={{marginHorizontal:10, marginVertical:12, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize:20, marginEnd:'auto', color:'#000'}}>Notification</Text>
                <View style={{marginStart:'auto',flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    {/* <Text style={{fontSize:18, marginStart:'auto', color:'grey', marginEnd:10}}>PIN</Text> */}
                    <AntDesign name='right' size={25} color='#000' />
                </View>
            </View>
            <TouchableOpacity onPress={handleClear} style={{flexDirection:'row', justifyContent:'center', alignContent:'center', marginVertical:20, marginHorizontal:50, backgroundColor:'#7F3DFF', borderRadius:20, paddingVertical:10}}>
                    <Text style={{fontSize:20, color:'white'}}>Clear Data</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Setting