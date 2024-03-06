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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import { useData } from '../../../../DataContext';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dataMonth = [
    { label: 'January ', value: '1' },
    { label: 'February', value: '2' },
    { label: 'March', value: '2' },
    { label: 'April', value: '2' },
    { label: 'May', value: '2' },
    { label: 'June', value: '2' },
    { label: 'July', value: '2' },
    { label: 'August', value: '2' },
    { label: 'September', value: '2' },
    { label: 'October', value: '2' },
    { label: 'November', value: '2' },
    { label: 'December', value: '2' },
];
const Home = ({ navigation }) => {
    const [openIcoms,setOpenIcoms] = useState(false);
    const {accountBalance} = useData();
    const [months, setMonths]=useState("");
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === months && (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
            </View>
        );
    };
    const handleAdd = async () => {
        try {
            const item = {
                money: money,
                category: category,
                type: type,
                date: valueDateS,
                time: valueTimeS,
                budget: budget,
                description: note,
            }
            updateAccountBalanece(money);
            addCollect(item);
            setMoney(0);
            setCategory("");
            setType("");
            setNote("");
            navigation.navigate('Transaction');
        } catch (error) {
            Alert.alert("lỗi");
            console.log(error);
        }
    }
    return (
        <View style={{ flexDirection: 'column', flex: 1}}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={dataMonth}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        searchPlaceholder="Search..."
                        value={months}
                        onChange={item => {
                            setMonths(item.value);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="calendar" size={20} />
                        )}
                        renderItem={renderItem}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='bells' size={30} color='black' />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 5 }}>
                <Text style={{ fontSize: 20 }}>Account Balance</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 5 }}>
                <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>{accountBalance}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 }}>
                <View style={{
                    flexDirection: 'row', backgroundColor: '#00A86B', marginEnd: 'auto'
                    , justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 10,
                }}>
                    <AntDesign name='caretdown' size={50} color='white' />
                    <View style={{ flexDirection: 'column', marginStart: 5 }}>
                        <Text style={{ fontSize: 20 }}>Income</Text>
                        <Text style={{ fontSize: 30 }}>5000</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', backgroundColor: '#FD3C4A', marginStart: 'auto'
                    , justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 10
                }}>
                    <AntDesign name='caretup' size={50} color='white' />
                    <View style={{ flexDirection: 'column', marginStart: 5 }}>
                        <Text style={{ fontSize: 20 }}>Income</Text>
                        <Text style={{ fontSize: 30 }}>5000</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 'auto', margin: 10 }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Spend Frequence</Text>
            </View>
            <View style={{ backgroundColor: 'yellow', height: 200 }}>
                {/* bieu do chi tieu cac kieu */}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 5 }}>
                <View style={{ alignItems: 'center', paddingVertical: 10, borderWidth: 1, backgroundColor: 'yellow', paddingHorizontal: 20, borderRadius: 10 }}>
                    <Text>Today</Text>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("test");
                    }}>
                        <Text>Week</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                    <Text>Month</Text>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                    <Text>Year</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000', marginEnd: 'auto' }}>Recent Transaction</Text>
                <View style={{ borderWidth: 1, borderRadius: 15, padding: 5, backgroundColor: '' }}>
                    <Text style={{ color: 'black' }}>See all</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', marginVertical: 5, marginHorizontal: 25 }}>
                    <View style={{ backgroundColor: '#FCEED4', padding: 10, borderRadius: 10 }}>
                        <FontAwesome6 name='bowl-food' size={30} color='#FCAC12' />
                    </View>
                    <View style={{ flexDirection: 'column', marginStart: 10 }}>
                        <Text style={{ fontSize: 18, marginBottom: 9, fontWeight: 'bold', color: '#000' }}>Shopping</Text>
                        <Text style={{ fontSize: 15 }}>Buy some sextoy</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginStart: 'auto' }}>
                        <Text style={{ fontSize: 18, marginBottom: 9, color: 'red', fontWeight: 'bold' }}>-$120</Text>
                        <Text style={{ fontSize: 15 }}>10:00 AM</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    contentView: {
        width: 320,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 20
    },
    circle: {
        width: 50,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#7F3DFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    number: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    },
    dropdown: {
        margin: 10,
        height: 50,
        width:150,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    icon: {
        marginRight: 10,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});