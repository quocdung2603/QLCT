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
import { useData } from '../../../../DataContext';
import ItemTransaction from '../../../Components/ItemTransaction';
const Transaction = ({ navigation }) => {
    const { hTransaction } = useData();
    return (
        <View style={{ flex: 1, flexDirection: 'column', padding: 10 }}>
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
            <TouchableOpacity
                onPress={() => { navigation.navigate("FinancialReport") }}
                style={{ flexDirection: 'row', margin: 10, borderWidth: 1, borderRadius: 10, paddingVertical: 10, backgroundColor: '#EEE5FF', borderColor: '#EEE5FF', justifyContent: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 20, color: '#A97CFF', marginEnd: 'auto' }}>See your financial report</Text>
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