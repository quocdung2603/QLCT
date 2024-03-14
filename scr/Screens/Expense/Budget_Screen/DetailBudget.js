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
import { Slider, Icon } from '@rneui/themed';
import { Typography } from 'antd';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useData } from '../../../../DataContext';
import ItemTransaction from '../../../Components/ItemTransaction';
const DetailBudget = ({navigation,route})  => {
    const id = route.params?.budget || 'Default Value';
    const { hTransaction } = useData();
    const [transaction,setTransaction]=useState([]);
    useEffect(()=>{
        const dt=[];
        hTransaction.map((item)=>{
            if(item.budget===id.nameBudget)
            dt.push(item);
        })
        setTransaction(dt);
    },[id])
    return (
        <View style={{flex:1, flexDirection:'column', backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.goBack()}}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, marginEnd: 'auto' }}>Income</Text>
            </View>
            <View style={{flexDirection:'column', flex:0.95}}>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', flex:0.7}}>
                    <TouchableOpacity style={{height: 35 }}>
                                <View style={{
                                    width: 160, height: 80,
                                    alignItems: "center", justifyContent: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: 25,
                                    flexDirection: 'row',
                                    borderWidth: 1
                                }}>
                                    <View style={{ height: 18, width: 20, borderRadius: 20, backgroundColor: 'blue', marginRight: 10 }}></View>
                                    <Text style={{fontSize: 20}}>{id.nameBudget}</Text>
                                </View>
                    </TouchableOpacity>
                    <View style={{ position: "relative", marginTop: 70 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Remaining</Text>
                            <Text style={{ fontSize: 80, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>{id.remaining} $</Text>
                            <View style={[]}>
                                <Slider
                                    style={{ borderRadius: 20 }}
                                    maximumValue={id.value}
                                    minimumValue={0}
                                    step={1}
                                    minimumTrackTintColor="#7F3DFF"
                                    maximumTrackTintColor="#BEBEBE"
                                    allowTouchTrack
                                    trackStyle={{ width: 350,height: 20, backgroundColor: "#7F3DFF", borderRadius: 20 }}
                                    thumbTintColor="transparent" // Ẩn chấm hình tròn
                                    value={id.remaining}
                                    disabled={true}
                                />
                            </View>
                        </View>
                        <View style={{
                                    alignItems: "center", justifyContent: 'center',
                                    backgroundColor: 'red',
                                    borderRadius: 25,
                                    flexDirection: 'row',
                                    marginTop: 20,
                                    padding: 10
                                }}>
                                    <View style={{ height: 18, width: 20, borderRadius: 20, backgroundColor: 'blue', marginRight: 10 }}></View>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Cảnh báo bạn đang chi tiêu quá mức cho phép</Text>
                                </View>
                </View>        
            <ScrollView style={{ flexDirection: 'column', margin: 10,maxHeight: 350 }}>
                    {
                        transaction.map((item, index) => {
                            const isDifferentMonth = index === 0 || item.date.getMonth() !== hTransaction[index - 1].date.getMonth();
                            return (
                                <View key={index}>
                                    {isDifferentMonth && (
                                        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#000' }}>
                                            {item.date.getMonth() + 1}/{item.date.getFullYear()}
                                        </Text>
                                    )}
                                    <ItemTransaction item={item}></ItemTransaction>
                                </View>
                            );
                        })
                    }
                </ScrollView> 
            </View>
            <TouchableOpacity 
                onPress={() => {navigation.navigate("CreateBudget")}}
                style={{flexDirection:'row', backgroundColor:'#7F3DFF', marginHorizontal:30, justifyContent:'center', alignContent:'center', borderRadius:10}}>
                <Text style={{fontSize:20, color:'white',paddingVertical:10,}}>Edit Budget</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DetailBudget;