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
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Dropdown } from 'react-native-element-dropdown';

const dataCategory = [
    { label: 'Shopping ', value: '1' },
    { label: 'Fill oil', value: '2' },
];

const dataBudget = [
    { label: 'A ', value: '1' },
    { label: 'B', value: '2' },
];

const dataTypeTrans = [
    { label: 'Income ', value: '1' },
    { label: 'Expense ', value: '1' },
];

const EditDetailTransaction = () => {
    const [Category, setCategory] = useState("");
    const [Budget, setBudget] = useState("");
    const [TypeTrans, setTypeTrans] = useState("");
    const [Title, setTitle] = useState("Buy some cocain");
    const [Description, setDescription] = useState("sáng hôm qua sau khi ngủ một giấc dài từ trưa ngày hôm trước tôi nhận ra mình chưa hoàn thành deadline. Thế nên tôi đã gấp rút hoàn thành phần deadline của mình và push nó lên github. Nhưng sau khi đưa lên github tôi nhận ra mình vẫn chưa hoàn thành nó 100% nên phải làm tiếp. ĐCM");
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === Category && (
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
        <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <View style={{backgroundColor:'#00A86B', flexDirection: 'row',justifyContent: 'center', alignContent: 'center', padding:10}}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.goBack()}}>
                    <AntDesign name='arrowleft' size={30} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 25, fontWeight:'bold'}}>Detail Transaction</Text>
                <TouchableOpacity style={{ marginStart: 'auto' }} onPress={() => {}}>
                    <Ionicons name='trash' size={30} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column', backgroundColor:'#00A86B', justifyContent:'center',alignItems:'center',paddingTop:40}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{marginEnd:10,color:'#fff', fontSize:30}}>$</Text>
                    <TextInput
                        value={"100000"}
                        //onChangeText={item => {setMoney(item)}}
                        autoComplete='false'
                        keyboardType='decimal-pad'
                        style={{borderWidth:1, borderColor:'#fff', borderRadius:10, color:'#fff', fontSize:30, padding:-5, fontWeight:'bold'}} 
                    />
                </View>
                <TextInput
                    value={Title}
                    onChangeText={item => {setTitle(item)}}
                    autoComplete='false'
                    keyboardType='default'
                    style={{color:'#fff', fontSize:18, marginTop:10, borderWidth:1, paddingVertical:-5, borderColor:'#fff'}} 
                />
            </View>
            <View style={{backgroundColor:'#00A86B', flexDirection: 'row',justifyContent: 'center', alignContent: 'center',paddingTop:10,paddingBottom:40, borderBottomEndRadius:25,borderBottomStartRadius:25}}>
                <Text style={{color:'#fff',fontSize:18, marginEnd:10}}>January, 24 2024</Text>
                <Text style={{color:'#fff',fontSize:18, marginStart:10}}>18:00</Text>
            </View>
            <View style={{backgroundColor:'#fff',flexDirection:'row', padding:4, marginStart:15, marginEnd:15, marginTop:-25, borderTopRightRadius:10, borderTopLeftRadius:10, borderWidth:0.5, borderColor:'grey'}}>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginEnd:'auto'}}>
                    <Text style={{fontSize:18, color:'grey'}}>Type</Text>
                    {/* <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>Income</Text> */}
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={dataTypeTrans}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        searchPlaceholder="Search..."
                        value={TypeTrans}
                        onChange={item => {
                            setTypeTrans(item.value);
                        }}
                        // renderLeftIcon={() => (
                        //     <AntDesign style={styles.icon} color="black" name="calendar" size={20} />
                        // )}
                        renderItem={renderItem}
                    />
                </View>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:18, color:'grey'}}>Category</Text>
                    {/* <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>Shopping</Text> */}
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={dataCategory}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        searchPlaceholder="Search..."
                        value={Category}
                        onChange={item => {
                            setCategory(item.value);
                        }}
                        // renderLeftIcon={() => (
                        //     <AntDesign style={styles.icon} color="black" name="calendar" size={20} />
                        // )}
                        renderItem={renderItem}
                    />
                </View>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginStart:'auto'}}>
                    <Text style={{fontSize:18, color:'grey'}}>Budget</Text>
                    {/* <Text style={{fontSize:18, fontWeight:'bold', color:'#000'}}>A</Text> */}
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={dataBudget}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        searchPlaceholder="Search..."
                        value={Budget}
                        onChange={item => {
                            setBudget(item.value);
                        }}
                        // renderLeftIcon={() => (
                        //     <AntDesign style={styles.icon} color="black" name="calendar" size={20} />
                        // )}
                        renderItem={renderItem}
                    />
                </View>
            </View>
            <View style={{borderWidth:3, borderStyle:'dashed', margin:10, borderColor:'grey' }}></View>
            <View style={{flexDirection:'column', margin:10}}>
                <Text style={{marginEnd:'auto', fontSize:18, color:'grey',}}>Description</Text>
                <View style={{flexDirection:'column', marginHorizontal:10}}>
                    <TextInput
                        value={Description}
                        onChangeText={item => {setDescription(item)}}
                        autoComplete='false'
                        multiline
                        keyboardType='default'
                        style={{color:'#000', fontSize:13, paddingVertical:-10}} 
                    />
                </View>
            </View>
            <View style={{flexDirection:'column', margin:10}}>
                <Text style={{marginEnd:'auto', fontSize:18, color:'grey'}}>Attachment</Text>
                <View style={{flexDirection:'column', marginHorizontal:10, height:170, backgroundColor:'yellow'}}>
                    
                </View>
            </View>
            <View style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                    <TouchableOpacity
                        style={{marginVertical: 20, marginHorizontal:10 ,backgroundColor: '#E5E5E5', borderRadius: 20, paddingVertical: 10 , paddingHorizontal:20}}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginVertical: 20, marginHorizontal:10, backgroundColor: '#7F3DFF', borderRadius: 20, paddingVertical: 10 , paddingHorizontal:36}}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Edit</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditDetailTransaction;

const styles = StyleSheet.create({
    contentView: {
        width: 320,
        justifyContent: 'center',
        alignItems: 'stretch',
        //marginTop: 20
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
        fontSize: 11,
        textAlign: 'center'
    },
    dropdown: {
        margin: 5,
        height: 30,
        width: 110,
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
        marginRight: 5,
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
});