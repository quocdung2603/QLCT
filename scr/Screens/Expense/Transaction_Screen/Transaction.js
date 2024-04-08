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
import Octicons from 'react-native-vector-icons/Octicons'
import { useData } from '../../../../DataContext';
import ItemTransaction from '../../../Components/ItemTransaction';
const Transaction = ({ navigation }) => {
    const { hTransaction } = useData();
    return (
        <View style={{ flex: 1, flexDirection: 'column'}}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Lịch sử giao dịch</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='bells' size={30} color='black' />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => { navigation.navigate("FinancialReport") }}
                style={{ flexDirection: 'row', margin: 10, borderWidth: 1, borderRadius: 10, paddingVertical: 10, backgroundColor: '#EEE5FF', borderColor: '#EEE5FF', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, color: '#A97CFF', marginEnd: 'auto',marginStart:10 }}>Xem báo cáo tổng quát</Text>
                <View style={{ marginStart: 'auto' }}>
                    <AntDesign name='right' size={25} color='#A97CFF' />
                </View>
            </TouchableOpacity>
            <ScrollView style={{ flexDirection: 'column', margin: 10 }}>
                {
                    hTransaction.map((item, index) => {
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
    );
}

export default Transaction;