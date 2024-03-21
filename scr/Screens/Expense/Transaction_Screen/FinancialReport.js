import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CharReport from '../../../Components/CharReport';
import { useData } from '../../../../DataContext';
import ItemTransaction from '../../../Components/ItemTransaction';
const checkType={
    checkE: { 
        backgroundColor: 'blue', 
        borderColor: '#7F3DFF', 
        borderWidth: 1, 
        paddingHorizontal: 20, 
        paddingVertical: 5, 
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10 
    },
    unCheckE: { 
        borderColor: '#7F3DFF', 
        borderWidth: 1, 
        paddingHorizontal: 20, 
        paddingVertical: 5, 
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10 
    },
    checkI: {
        backgroundColor: 'blue', 
        borderColor:'#7F3DFF', 
        borderWidth:1, 
        paddingHorizontal:20,
        paddingVertical:5
        ,borderTopRightRadius:10, 
        borderBottomRightRadius:10
    },
    unCheckI: {
        borderColor:'#7F3DFF', 
        borderWidth:1, 
        paddingHorizontal:20,
        paddingVertical:5
        ,borderTopRightRadius:10, 
        borderBottomRightRadius:10
    }
}
const FinancialReport = ({navigation})  => {
    const [typeReport,setTypeRepory]=useState(0);
    const [sumMoney,setSumMoney]=useState(0);
    const [sumMoneyStr,setSumMoneyStr]=useState(0);
    const { hTransaction } = useData();
    const [add,setAdd]=useState([]);
    const [str,setStr]=useState([]);
    useEffect(()=>{
        let sum=0;
        let sumStr=0;
        const monthNow = new Date().getMonth()+1;
        const yearNow = new Date().getFullYear();
        hTransaction.sort((a, b) => a.date - b.date);
        const ad=[];
        const st=[];
        hTransaction.map((item) => {
            //console.log(item);
            if (item.typeTransaction==="add" && item.date.getMonth() + 1 === monthNow && yearNow === item.date.getFullYear()) {
                const tmp = parseInt(item.money);
                sum+=tmp;
                ad.push(item);
            }
            if (item.typeTransaction==="str" && item.date.getMonth() + 1 === monthNow && yearNow === item.date.getFullYear()) {
                const tmp = parseInt(item.money);
                sumStr+=tmp;
                st.push(item);
            }
        })
        setSumMoneyStr(sumStr);
        setSumMoney(sum);
        setAdd(ad);
        setStr(st);
    },[hTransaction])
    return (
        <ScrollView style={{flex:1, flexDirection:'column', padding:10}}>
            <TouchableOpacity   
                onPress={() => {navigation.navigate("Home")}}
                style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <View style={{ marginRight: 'auto' }}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </View>
                <Text style={{ color: '#000', fontSize: 20, marginEnd: 'auto' }}>Financial Report</Text>
            </TouchableOpacity>
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
                <Text style={{fontSize:20, color:'black', fontWeight:'bold'}}>${typeReport===0 ? sumMoneyStr : sumMoney}</Text>
            </View>
            <View style={{ height:220, marginHorizontal: 5,alignItems: 'center',justifyContent: 'center'}}>
                <CharReport typeReport={typeReport}></CharReport>
            </View>
            <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:10, justifyContent:'center', alignContent:'center'}}>
                <TouchableOpacity onPress={()=>{setTypeRepory(0)}} style={typeReport===0 ? checkType.checkE : checkType.unCheckE}>
                        <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Expense</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setTypeRepory(1)}} style={typeReport===1 ? checkType.checkI : checkType.unCheckI}> 
                        <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Income</Text>
                </TouchableOpacity>
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
            {
                typeReport===1 ? 
                add.map((item,index)=>{
                    return (
                            <View key={index}>
                                <ItemTransaction item={item}></ItemTransaction>
                            </View>
                        );
                }) :
                str.map((item,index)=>{
                    return (
                            <View key={index}>
                                <ItemTransaction item={item}></ItemTransaction>
                            </View>
                        );
                })
            }
        </ScrollView>
    );
}

export default FinancialReport;