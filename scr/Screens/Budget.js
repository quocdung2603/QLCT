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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Budget = ()  => {
    return (
        <View style={{flex:1, flexDirection:'column', backgroundColor:'#7F3DFF'}}>
            <View style={{flexDirection:'row', marginTop:100, marginBottom:40, marginHorizontal:20, justifyContent:'center', alignContent:'center'}}>
                <View style={{marginEnd:'auto'}}>
                    <AntDesign name='left' size={25} color='#fff' />
                </View>
                <Text style={{fontWeight:'bold', fontSize:20, color:'#fff'}}>May</Text>   
                <View style={{marginStart:'auto'}}>
                <AntDesign name='right' size={25} color='#fff' />
                </View>
            </View>
            <View style={{flexDirection:'column', flex:1, backgroundColor:'white', borderTopLeftRadius:25, borderTopRightRadius:25}}>
                <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center', flex:0.7}}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                        <Text style={{fontSize:18, color:'grey'}}>You don't have a budget.</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                        <Text style={{fontSize:18, color:'grey'}}>Let's make one so you in control.</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', backgroundColor:'#7F3DFF', marginHorizontal:80, justifyContent:'center', alignContent:'center', borderRadius:10}}>
                    <Text style={{fontSize:20, color:'white',paddingVertical:10,}}>Create a Budget</Text>
                </View>
            </View>
        </View>
    );
}

export default Budget;