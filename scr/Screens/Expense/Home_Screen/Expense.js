import React from 'react';
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
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const Expense = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#FD3C4A', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => { navigation.goBack()}}>
                    <AntDesign name='arrowleft' size={30} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, marginEnd: 'auto' }}>Expense</Text>
            </View>
            <View style={{ marginTop: 100, flexDirection: 'column', marginHorizontal:10 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>How Much ? </Text>
                <TextInput
                    autoComplete='false'
                    keyboardType='decimal-pad'
                    style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', marginHorizontal: 10, marginVertical: 10, borderRadius: 10 }} />
            </View>
            <View style={{flex:1,flexDirection:'column', borderWidth:1, borderColor:'white', borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:'white'}}>
                <View style={{flexDirection:'row', marginHorizontal:10, marginVertical:10, borderWidth:1, borderRadius:10,borderColor:'grey', padding:10}}>
                    <Text style={{fontSize:20, color:'grey'}}>Category</Text>
                    <View style={{marginStart:'auto'}}>
                        <AntDesign name='down' size={30} color='grey' />
                    </View>
                </View>
                <View style={{flexDirection:'row', marginHorizontal:10, marginVertical:10, borderWidth:1, borderRadius:10,borderColor:'grey', padding:10}}>
                    <Text style={{fontSize:20, color:'grey'}}>Wallet</Text>
                    <View style={{marginStart:'auto'}}>
                        <AntDesign name='down' size={30} color='grey' />
                    </View>
                </View>
                <View style={{flexDirection:'row', marginHorizontal:10, marginVertical:10, borderWidth:1, borderRadius:10,borderColor:'grey', padding:10}}>
                    <TextInput 
                        autoComplete='false'
                        keyboardType='default'
                        placeholder='Description'
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', marginVertical:10}}>
                    <Entypo name='attachment' size={25} />
                    <Text style={{fontSize:19, marginLeft:10}}>Add attachment</Text>
                </View>
                <View style={{flexDirection:'row',borderWidth:1,borderColor:'yellow',height:150}}>

                </View>
                <View style={{ flexDirection: 'row', margin: 10}}>
                    <View style={{flexDirection:'column', justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 20, marginRight:'auto'}}>Repeat</Text>
                        <Text style={{ color: 'grey', fontSize: 15, marginRight:'auto'}}>Repeat Transaction</Text>
                    </View>
                    <View style={{ marginStart: 'auto',justifyContent: 'center', alignContent: 'center'  }}>
                        <Switch
                        // trackColor={{ false: 'grey', true: 'skyblue' }}
                        // thumbColor={isEnabledChangePassword2factor ? 'skyblue' : 'grey'}
                        // onValueChange={() => {
                        //     isEnabledChangePassword2factor == false
                        //         ? (
                        //             setEnabledChangePassword2factor(true),
                        //             setCheck2factor(true)
                        //         ) : (setEnabledChangePassword2factor(false))
                        // }}
                        // value={isEnabledChangePassword2factor}
                        // style={{
                        //     paddingEnd: 10
                        // }}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', marginVertical:20, marginHorizontal:50, backgroundColor:'#7F3DFF', borderRadius:20, paddingVertical:10}}>
                    <Text style={{fontSize:20, color:'white'}}>Save</Text>
                </View>
            </View>
        </View>
    )
}

export default Expense