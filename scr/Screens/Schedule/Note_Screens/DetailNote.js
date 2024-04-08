import * as React from "react";
import { useState, useEffect, useRef } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Switch,
    TouchableOpacity,
    Modal,
} from 'react-native';
//icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const DetailNote = ({navigation,route}) => {
    const item = route.params?.item || "Null";
    return (
        <View style={{flex:1, flexDirection:'column', margin: 10}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.navigate('TakeNote')}}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 25, marginEnd: 'auto', fontWeight:'bold' }}>Chi tiết ghi chú</Text>
                <View style={{marginStart:'auto', marginEnd:10}}></View>
            </View>
            <View style={{margin:10, flexDirection:'row'}}>
                <Ionicons name="star" size={30} color="#FD3C4A" />
                <Text style={{fontSize:23, fontWeight:'bold', color:'#7F3DFF', marginStart:10}}>{item.title}</Text>
            </View>
            <View style={{margin:10, borderWidth:1, borderRadius:10, borderColor:'#D3BDFF', backgroundColor:'#D3BDFF'}}>
                <Text style={{fontSize:18}}>{item.content}</Text>
            </View>
        </View>
    );
};

export default DetailNote;