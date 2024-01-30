import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Setting = () =>{
    return (    
        <View style={{flex:1, flexDirection:'column', backgroundColor:'white',}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center', margin:10 }}>
                <View style={{ marginRight: 'auto' }}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </View>
                <Text style={{ color: '#000', fontSize: 20, marginEnd: 'auto' }}>Setting</Text>
            </View>
            <View style={{marginHorizontal:10, marginVertical:5, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize:20, marginEnd:'auto', color:'#000'}}>Currency</Text>
                <View style={{marginStart:'auto',flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <Text style={{fontSize:19, marginStart:'auto', color:'grey', marginEnd:10}}>USD</Text>
                    <AntDesign name='right' size={30} color='#000' />
                </View>
            </View>
            <View style={{marginHorizontal:10, marginVertical:5, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize:20, marginEnd:'auto', color:'#000'}}>Language</Text>
                <View style={{marginStart:'auto',flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <Text style={{fontSize:19, marginStart:'auto', color:'grey', marginEnd:10}}>English</Text>
                    <AntDesign name='right' size={30} color='#000' />
                </View>
            </View>
        </View>
    );
}

export default Setting