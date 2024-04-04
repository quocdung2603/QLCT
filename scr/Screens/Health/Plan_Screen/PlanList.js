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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PlanList = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{marginEnd:'auto', fontSize:22, fontWeight:'bold', color:'#000'}}>Tập Vai</Text>
            </View>
            <Text style={{margin:10, fontSize:20, fontWeight:'bold', color:'#000'}}>Danh sách bài tập</Text>
            <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('ExcersiseItem') }}
                    style={{marginVertical: 4, marginHorizontal: 30, flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 10, alignItems: 'center' }}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>Nghiêng vai với tạ đơn</Text>
                        <Text style={{ fontSize: 16, color: '#000'}}>12 lần / hiệp</Text>
                    </View>
                    <View style={{ marginStart: 'auto', backgroundColor: 'yellow' }}>
                        <Text>Hình ảnh</Text>
                        <Text>Hình ảnh</Text>
                        <Text>Hình ảnh</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('ExcersiseItem') }}
                    style={{marginVertical: 4, marginHorizontal: 30, flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 10, alignItems: 'center' }}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>Nghiêng vai với tạ đơn</Text>
                        <Text style={{ fontSize: 16, color: '#000'}}>12 lần / hiệp</Text>
                    </View>
                    <View style={{ marginStart: 'auto', backgroundColor: 'yellow' }}>
                        <Text>Hình ảnh</Text>
                        <Text>Hình ảnh</Text>
                        <Text>Hình ảnh</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default PlanList;