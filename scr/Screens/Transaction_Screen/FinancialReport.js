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

const FinancialReport = ()  => {
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <View style={{ marginRight: 'auto' }}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </View>
                <Text style={{ color: '#000', fontSize: 20, marginEnd: 'auto' }}>Financial Report</Text>
            </View>
            <View style={{flexDirection:'row', margin:10}}>
                <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', borderWidth:1, borderColor:'grey', paddingHorizontal:5, borderRadius:10, marginEnd:'auto'}} >
                    <View>
                        <AntDesign name='down' size={25} color='#000' />
                    </View>
                    <Text style={{fontSize:20, color:'black'}}>Month</Text>
                </View>
                <View style={{justifyContent:'center', alignContent:'center', marginStart:'auto',flexDirection:'row'}}>

                    <View style={{borderWidth:1,borderTopLeftRadius:10,borderBottomLeftRadius:10, borderColor:'white', backgroundColor:'#7F3DFF',padding:5}}>
                        <MaterialCommunityIcons name='chart-timeline-variant' size={25} color='white'/>
                    </View>
                    <View style={{borderWidth:1, borderTopRightRadius:10, borderBottomRightRadius:10, borderColor:'white', backgroundColor:'#7F3DFF',padding:5}}>
                        <MaterialCommunityIcons name='chart-pie' size={25} color='white'/>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginRight:'auto', margin:10}}>
                <Text style={{fontSize:20, color:'black', fontWeight:'bold'}}>$300</Text>
            </View>
            <View style={{backgroundColor:'yellow', height:200}}>
                {/* bieu do chi tieu cac kieu */}
            </View>
            <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:10, justifyContent:'center', alignContent:'center'}}>
                <View style={{borderColor:'#7F3DFF', borderWidth:1, paddingHorizontal:20,paddingVertical:5
                ,borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Expense</Text>
                </View>
                <View style={{borderColor:'#7F3DFF', borderWidth:1, paddingHorizontal:20,paddingVertical:5
                ,borderTopRightRadius:10, borderBottomRightRadius:10}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Income</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', margin:10, justifyContent:'center', alignItems:'center'}}>
                <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', borderWidth:1, borderColor:'grey', paddingHorizontal:10, borderRadius:10, marginEnd:'auto'}} >
                    <AntDesign name='down' size={25} color='#000' />
                    <Text style={{fontSize:20, color:'black'}}>Transaction</Text>
                </View>
                <View style={{borderWidth:1, borderRadius:5, padding:5, backgroundColor:''}}>
                    <FontAwesome5 name='sort-amount-down' size={20} color='black'/>
                </View>
            </View>
            <ScrollView>
                <View style={{flexDirection:'row', marginVertical:5, marginHorizontal:25}}>
                    <View style={{backgroundColor:'#FCEED4', padding:10, borderRadius:10}}>
                        <FontAwesome6 name='bowl-food' size={30} color='#FCAC12'/>
                    </View>
                    <View style={{flexDirection:'column', marginStart:10}}>
                        <Text style={{fontSize:18, marginBottom:9, fontWeight:'bold', color:'#000'}}>Shopping</Text>
                        <Text style={{fontSize:15}}>Buy some sextoy</Text>
                    </View>
                    <View style={{flexDirection:'column', marginStart:'auto'}}>
                        <Text style={{fontSize:18, marginBottom:9, color:'red', fontWeight:'bold'}}>-$120</Text>
                        <Text style={{fontSize:15}}>10:00 AM</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default FinancialReport;