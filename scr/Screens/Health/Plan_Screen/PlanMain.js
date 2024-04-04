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

const PlanMain = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("CreatePlan") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='plus' size={35} color='black' />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                onPress={() => {navigation.navigate("PlanList")}}
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
                        onPress={()=> {navigation.navigate("EditNote")}}
                    >
                        <MaterialIcons name="edit" size={30} color='#00A86B'/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginStart:'auto'}}
                    >
                        <Ionicons name="trash-bin" size={30} color='#464A4C'/>
                    </TouchableOpacity>
                </View>
                <Text style={{fontWeight:'bold', fontSize:25, margin:10}}>Tập vai</Text>
            </TouchableOpacity>
        </View>
    )
}
export default PlanMain;