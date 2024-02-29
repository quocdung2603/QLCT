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
import { useNavigation } from '@react-navigation/native';
//icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TakeNote = ({navigation}) => {
    return ( 
        <View style={{flex:1, flexDirection:'column', margin:10}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ color: '#000', fontSize: 25,marginStart:'auto', fontWeight:'bold'}}>Notes</Text>
                <TouchableOpacity 
                    style={{ marginStart: 'auto' }} 
                    onPress={() => {navigation.navigate("AddNote")}}
                >
                    <AntDesign name='plus' size={35} color='#000' />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                onPress={() => {}}
                style={{flexDirection:'column', margin:10, borderColor:'#D3BDFF', borderWidth:1, borderRadius:10, padding:10, backgroundColor:'#D3BDFF'}}
            >
                <View style={{flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20, color:'#7F3DFF', marginEnd:'auto', fontWeight:'bold'}}>28-2-2024</Text>
                    <Text style={{fontSize:20, color:'#7F3DFF', marginEnd:'auto', fontWeight:'bold'}}>16:13</Text>
                    <TouchableOpacity
                        style={{marginStart:'auto'}}
                    >
                        <Ionicons name="flag" size={30} color='#FD3C4A'/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginStart:'auto'}}
                    >
                        <MaterialIcons name="edit" size={30} color='#00A86B'/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginStart:'auto'}}
                    >
                        <Ionicons name="trash-bin" size={30} color='#464A4C'/>
                    </TouchableOpacity>
                </View>
                <Text style={{fontWeight:'bold', fontSize:25, margin:10}}>Mạng trường như c*c</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TakeNote;
