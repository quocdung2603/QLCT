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

const EditNote = ({navigation}) => {
    return (
        <View style={{flex:1, flexDirection:'column', margin:10, backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity 
                    style={{ marginRight: 'auto' }} 
                    onPress={() => {navigation.navigate("TakeNote")}}
                >
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 25, fontWeight:'bold'}}>Edit Note</Text>
                <TouchableOpacity 
                    style={{ marginStart: 'auto' }} 
                    //onPress={() => {navigation.navigate("TakeNote")}}
                >
                    <Ionicons name='checkmark-sharp' size={30} color='#000' />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Title</Text>
                <TextInput
                    autoComplete='false'
                    keyboardType='text'
                    placeholder="Enter schedule's title"
                    style={{ backgroundColor: '#fff', borderColor: '#000', marginHorizontal: 10, marginVertical: 10, borderBottomWidth: 1, width: 300 }} />
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Main content</Text>
            <View style={{flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, borderWidth:1, borderRadius:10, borderColor:'#D3BDFF', height:300, backgroundColor:'#D3BDFF'}}>
                <TextInput
                    autoComplete='false'
                    keyboardType='text'
                    placeholder="Enter main content"
                    multiline
                    style={{marginHorizontal: 10, marginVertical: 10}} />
            </View>
        </View>
    );
};

export default EditNote;