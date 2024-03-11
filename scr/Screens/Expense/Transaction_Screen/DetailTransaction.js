import React, { useContext, useEffect, useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailTransaction = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <View style={{backgroundColor:'#00A86B', flexDirection: 'row',justifyContent: 'center', alignContent: 'center', padding:10}}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.goBack()}}>
                    <AntDesign name='arrowleft' size={30} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 25, fontWeight:'bold'}}>Detail Transaction</Text>
                <TouchableOpacity style={{ marginStart: 'auto' }} onPress={() => {}}>
                    <Ionicons name='trash' size={30} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column', backgroundColor:'#00A86B', justifyContent:'center',alignItems:'center',paddingTop:40}}>
                <Text style={{color:'#fff',fontSize:35, fontWeight:'bold'}}>$10000</Text>
                <Text style={{color:'#fff',fontSize:18,marginTop:10}}>Buy some cocain</Text>
            </View>
            <View style={{backgroundColor:'#00A86B', flexDirection: 'row',justifyContent: 'center', alignContent: 'center',paddingBottom:40, borderBottomEndRadius:25,borderBottomStartRadius:25}}>
                <Text style={{color:'#fff',fontSize:18, marginEnd:10}}>January, 24 2024</Text>
                <Text style={{color:'#fff',fontSize:18, marginStart:10}}>18:00</Text>
            </View>
            <View style={{backgroundColor:'#fff',flexDirection:'row', padding:8, marginStart:15, marginEnd:15, marginTop:-25, borderTopRightRadius:10, borderTopLeftRadius:10, borderWidth:0.5, borderColor:'grey'}}>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginEnd:'auto'}}>
                    <Text style={{fontSize:18, color:'grey'}}>Type</Text>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>Income</Text>
                </View>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:18, color:'grey'}}>Category</Text>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>Shopping</Text>
                </View>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginStart:'auto'}}>
                    <Text style={{fontSize:18, color:'grey'}}>Budget</Text>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>A</Text>
                </View>
            </View>
            <View style={{borderWidth:3, borderStyle:'dashed', margin:10, borderColor:'grey' }}></View>
            <View style={{flexDirection:'column', margin:10}}>
                <Text style={{marginEnd:'auto', fontSize:18, color:'grey',}}>Description</Text>
                <View style={{flexDirection:'column', marginHorizontal:10}}>
                    <Text>sáng hôm qua sau khi ngủ một giấc dài từ trưa ngày hôm trước tôi nhận ra mình chưa hoàn thành deadline</Text>
                </View>
            </View>
            <View style={{flexDirection:'column', margin:10}}>
                <Text style={{marginEnd:'auto', fontSize:18, color:'grey'}}>Attachment</Text>
                <View style={{flexDirection:'column', marginHorizontal:10, height:170, backgroundColor:'yellow'}}>
                    
                </View>
            </View>
            <View style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginVertical: 20, marginHorizontal: 50, backgroundColor: '#7F3DFF', borderRadius: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Edit</Text>
            </View>
        </View>
    );
};

export default DetailTransaction;