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
    Image,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from '../../Expense/Home_Screen/Home';

const ExcersiseItem = ({ navigation, TatModal }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
                <Text style={{marginEnd:'auto', fontSize:20, fontWeight:'bold', color:'#000', textAlign:'center'}}>Nghiêng vai với tạ đơn</Text>
                <TouchableOpacity style={{ marginStart: 'auto' }} onPress={() => {TatModal(false)}}>
                    <AntDesign name='close' size={30} color='#000' />
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'yellow', height:300}}>
                {/* video hoặc hình ảnh */}
            </View>
            <Text style={{marginVertical:10, fontSize:20, fontWeight:'bold', color:'#000'}}>Hướng dẫn</Text>
            <View style={{flexDirection:'column', marginHorizontal:30}}>
                <Text style={{fontSize:19, fontWeight:'bold', textAlign:'justify'}}>Lor tafi soosng looxi</Text>
                <Text style={{fontSize:19, fontWeight:'bold', textAlign:'justify'}}>Lor tafi soosng looxi</Text>
                <Text style={{fontSize:19, fontWeight:'bold', textAlign:'justify'}}>Lor tafi soosng looxi</Text>
            </View>
        </View>
    )
}

export default ExcersiseItem;