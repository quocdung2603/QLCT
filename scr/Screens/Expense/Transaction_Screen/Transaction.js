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
import { useData } from '../../../../DataContext';

const Transaction = () => {
    const { hTransaction } = useData();
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', borderWidth: 1, borderColor: 'grey', paddingHorizontal: 5, borderRadius: 10, marginEnd: 'auto' }} >
                    <View>
                        <AntDesign name='down' size={25} color='#000' />
                    </View>
                    <Text style={{ fontSize: 20, color: 'black' }}>Month</Text>
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center', marginStart: 'auto', }}>
                    <FontAwesome name='bars' size={25} color='black' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, borderWidth: 1, borderRadius: 10, paddingVertical: 10, backgroundColor: '#EEE5FF', borderColor: '#EEE5FF', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, color: '#A97CFF', marginEnd: 'auto' }}>See your financial report</Text>
                <View style={{ marginStart: 'auto' }}>
                    <AntDesign name='right' size={25} color='#A97CFF' />
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#000' }}>Today</Text>
                <ScrollView>
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginHorizontal: 25, borderWidth: 1, borderColor: '#FCFCFC', backgroundColor: '#FCFCFC', padding: 5 }}>
                        <View style={{ backgroundColor: '#FCEED4', padding: 10, borderRadius: 10 }}>
                            <FontAwesome6 name='bowl-food' size={30} color='#FCAC12' />
                        </View>
                        <View style={{ flexDirection: 'column', marginStart: 10 }}>
                            <Text style={{ fontSize: 18, marginBottom: 9, fontWeight: 'bold', color: '#000' }}>Shopping</Text>
                            <Text style={{ fontSize: 15 }}>Buy some</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginStart: 'auto' }}>
                            <Text style={{ fontSize: 18, marginBottom: 9, color: 'red', fontWeight: 'bold' }}>-$120</Text>
                            <Text style={{ fontSize: 15 }}>10:00 AM</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
            <View style={{ flexDirection: 'column', margin: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#000' }}>Yesterday</Text>
                <ScrollView>
                    {
                        hTransaction.map((item,index) => (
                            <View key={index} style={{ flexDirection: 'row', marginVertical: 5, marginHorizontal: 25, borderWidth: 1, borderColor: '#FCFCFC', backgroundColor: '#FCFCFC', padding: 5 }}>
                                <View style={{ backgroundColor: '#FCEED4', padding: 10, borderRadius: 10 }}>
                                    <FontAwesome6 name='bowl-food' size={30} color='#FCAC12' />
                                </View>
                                <View style={{ flexDirection: 'column', marginStart: 10 }}>
                                    <Text style={{ fontSize: 18, marginBottom: 9, fontWeight: 'bold', color: '#000' }}>{item.category}</Text>
                                    <Text style={{ fontSize: 15 }}>{item.description}</Text>
                                </View>
                                <View style={{ flexDirection: 'column', marginStart: 'auto' }}>
                                    {
                                        item.typeTransaction=="add" ? 
                                        <Text style={{ fontSize: 18, marginBottom: 9, color: 'red', fontWeight: 'bold' }}>+{item.money}</Text>:
                                        <Text style={{ fontSize: 18, marginBottom: 9, color: 'red', fontWeight: 'bold' }}>-{item.money}</Text>
                                    }
                                    <Text style={{ fontSize: 15 }}>10:00 AM</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
}

export default Transaction;