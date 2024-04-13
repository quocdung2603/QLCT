import React, { useEffect, useState } from 'react';
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
    TouchableOpacity,
    Alert,
    Modal,
    Image,
    PermissionsAndroid
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Dropdown } from 'react-native-element-dropdown';
import { useData } from '../../../../DataContext';
import { TimeDatePicker, Modes } from "react-native-time-date-picker";
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';
//image picker
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const dataCategory = [
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Market', value: 'Market' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
const dataType = [
    { label: 'Tiền mặt', value: '1' },
    { label: 'Chuyển khoản', value: '2' },
];
const Income = () => {
    const {budget,addCollect,updateAccountBalanece}=useData();
    const navigation = useNavigation();
    const [money,setMoney]=useState("");
    const [category,setCategory] = useState("");
    const [type,setType]=useState("");
    const [selectedBudget,setBudget]=useState("");
    const [note,setNote]=useState("");
    //pick time 
    const now = moment().valueOf();
    const [DateModalS, setDateModalS]= useState(false);
    const [valueDateS, setValueDateS]= useState('Pick Date');
    const [TimeModalS, setTimeModalS]= useState(false);
    const [valueTimeS, setValueTimeS]= useState('Pick Time');
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === category && (
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
    const handleAdd = async ()=>{
        try {
            const item = {
                money: money,
                category: category,
                type: type,
                date: valueDateS,
                time: valueTimeS,
                budget: selectedBudget,
                description: note,
            }
            updateAccountBalanece(money);
            addCollect(item);
            setMoney(0);
            setCategory("");
            setType("");
            setNote("");
            setValueDateS('Pick Date');
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert("lỗi");
            console.log(error);
        }
    }
    const [databudget,setDataBudget]=useState([]);
    useEffect(()=>{
        const dt=[];
        budget.map((item)=>{
            const it={
                label: item.nameBudget,
                value: item.nameBudget
            };
            dt.push(it);
        })
        setDataBudget(dt);
    },[])
    // image picker
    const [selectImage, setselectImage] = useState('');
    const ImagePicker = () => {
        let options = {
            storageOptions: {
                path:'image',
            }
        }
        launchImageLibrary(options, response => {
            setselectImage(response.assets[0].uri)
            console.log(response.assets[0].uri);
        })
    }
    const OpenCamera = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                const result = await launchCamera({ mediaType: 'photo', cameraType: 'back' });
                setselectImage(result.assets[0].uri);
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#00A86B', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.goBack()}}>
                    <AntDesign name='arrowleft' size={30} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 25, fontWeight:'bold'}}>Thu tiền</Text>
                <View style={{marginStart:'auto', marginEnd:10}}></View>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'column', marginHorizontal:10 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Nhập số tiền</Text>
                <TextInput
                    value={money.toString()}
                    onChangeText={item => {setMoney(item)}}
                    autoComplete='false'
                    keyboardType='decimal-pad'
                    style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'white', marginHorizontal: 10, marginVertical: 10, borderRadius: 10 }} />
            </View>
            <View style={{flex:1,flexDirection:'column', borderWidth:1, borderColor:'white', borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:'white'}}>
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
                    placeholder="Lý do nhận tiền"
                    searchPlaceholder="Search..."
                    value={category}
                    onChange={item => {
                        setCategory(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )}
                    renderItem={renderItem}
                />
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dataType}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Loại nhận tiền"
                    searchPlaceholder="Search..."
                    value={type}
                    onChange={item => {
                        setType(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )}
                    renderItem={renderItem}
                />
                <View style={{flexDirection:'row', margin:10}}>
                    <Text style={{ fontSize: 16, color: 'grey', alignSelf:'center', marginEnd:'auto' }}>Chọn ngày</Text>
                    <TouchableOpacity
                        onPress={() => { setDateModalS(true) }}
                        style={{ borderWidth: 1, borderRadius: 10, marginLeft: 10, padding: 10, flexDirection: 'row' }}
                    >
                        <Text style={{ fontSize: 15, marginRight: 15 }}>{valueDateS}</Text>
                        <AntDesign name='calendar' size={20} style={{ marginLeft: 15 }} />
                    </TouchableOpacity>
                </View>
                {/*date time start */}
                <Modal 
                    animationType="fade"
                    transparent={true}
                    visible={DateModalS}
                    onRequestClose={() => { setDateModalS(false) }}
                    style={{borderW:1, backgroundColor:'green'}}
                >
                    <TouchableOpacity
                        style={styles.modalBackground}
                        onPress={() => { setDateModalS(false) }}
                    >
                        <View style={styles.modalContent}>
                            <TimeDatePicker
                                selectedDate={now}
                                onMonthYearChange={(month) => {
                                    setValueDateS(month)
                                    console.log("month: ", month);
                                }}
                                onSelectedChange={(selected) => {
                                    setValueDateS(selected);
                                    console.log("selected: ", selected);
                                }}
                                onTimeChange={(time) => {
                                    console.log("time: ", time);
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Modal 
                    animationType="fade"
                    transparent={true}
                    visible={TimeModalS}
                    onRequestClose={() => { setTimeModalS(false) }}
                    style={{borderW:1, backgroundColor:'green'}}
                >
                    <TouchableOpacity
                        style={styles.modalBackground}
                        onPress={() => { setTimeModalS(false) }}
                    >
                        <View style={styles.modalContent}>
                            <TimeDatePicker
                                selectedDate={now}
                                mode={Modes.time}
                                options={{
                                    daysStyle: {
                                        borderRadius: 16,
                                        borderWidth: 0.5,
                                        borderColor: "#f1f1f1",
                                    },
                                    is24Hour: true,
                                }}
                                onMonthYearChange={(month) => {
                                    setValueTimeS(month);
                                    console.log("month: ", month);
                                }}
                                onSelectedChange={(selected) => {
                                    setValueTimeS(selected);
                                    console.log("selected: ", selected);
                                }}
                                onTimeChange={(time) => {
                                    console.log("time: ", time);
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
                {
                    databudget && 
                    <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={databudget}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Chọn mục chi tiêu"
                    searchPlaceholder="Search..."
                    value={selectedBudget}
                    onChange={item => {
                        setBudget(item.value);
                    }}
                />
                }
                <View style={{flexDirection:'row', marginHorizontal:10, marginVertical:10, borderWidth:1, borderRadius:10,borderColor:'grey', padding:10}}>
                    <TextInput 
                        value={note}
                        onChangeText={item => { setNote(item)}}
                        autoComplete='false'
                        keyboardType='default'
                        placeholder='Nhập mô tả'
                    />
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity 
                        onPress={() =>{ OpenCamera() }}
                        style={{flexDirection:'row', justifyContent:'center', alignContent:'center', marginVertical:10, marginHorizontal:10}}>
                        <Entypo name='camera' size={20} />
                        <Text style={{fontSize:18, marginLeft:10}}>Chụp ảnh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() =>{ ImagePicker() }}
                        style={{flexDirection:'row', justifyContent:'center', alignContent:'center', marginVertical:10, marginHorizontal:10}}>
                        <Entypo name='attachment' size={20} />
                        <Text style={{fontSize:18, marginLeft:10}}>Đính kèm ảnh</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center',height:150}}>
                    <Image style={{height:150, width:150, borderRadius:10}} source={{uri:selectImage}} />
                </View>
                <TouchableOpacity onPress={handleAdd} style={{flexDirection:'row', justifyContent:'center', alignContent:'center', marginVertical:20, marginHorizontal:50, backgroundColor:'#7F3DFF', borderRadius:20, paddingVertical:10}}>
                    <Text style={{fontSize:20, color:'white'}}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Income
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
    text: {
        fontSize: 15,
        marginRight: 15,
    },
    icon: {
        marginLeft: 15,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width:400,
        height:400,
    },
});