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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const DetailSchedule = ({navigation}) => {

    return ( 
        <View style={{flex:1, backgroundColor:'white', flexDirection:'column', padding:10}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.navigate('HomeSchedule')}}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 20, fontWeight:'bold'}}>Detail Schedule</Text>
                <View style={{marginStart:'auto'}}></View>
            </View>
            <Text style={{margin:10, fontSize:25, fontWeight:'bold', textAlign:'center'}}>Tiêu đề Của Note</Text>
            <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
                <View style={{flexDirection:'column', marginEnd:'auto'}}>
                    <Text style={{fontSize:19, fontWeight:'bold', textAlign:'center'}}>24/3/24</Text>
                    <Text style={{fontSize:19, fontWeight:'bold', textAlign:'center'}}>22:05</Text>
                </View>
                <View>
                    <Entypo name="arrow-bold-right" size={40} color="#D3BDFF" />
                </View>
                <View style={{flexDirection:'column', marginStart:'auto'}}>
                    <Text style={{fontSize:19, fontWeight:'bold', textAlign:'center'}}>24/3/24</Text>
                    <Text style={{fontSize:19, fontWeight:'bold', textAlign:'center'}}>22:05</Text>
                </View>
            </View>
            <View style={{flexDirection:'column', margin:10, backgroundColor:'#D3BDFF', borderWidth:1, borderColor:'#D3BDFF', borderRadius:10, padding:10}}>
                <Text style={{fontSize:18, color:'#000'}}>Con cò mà đi ăn đêm, đậu phải cành mềm lộn cổ xuống ao</Text>
            </View>
        </View>
    )
}
export default DetailSchedule;
