import * as React from "react";
import { useState, useEffect, useRef } from 'react';
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
    Modal,
} from 'react-native';
import Swiper from "react-native-swiper";
//icon
import AntDesign from 'react-native-vector-icons/AntDesign';
//datetime 
import { TimeDatePicker, Modes } from "react-native-time-date-picker";
import moment from "moment";
import { useDataSchedule } from "../../../Context/ScheduleContext";
import { useNavigation } from "@react-navigation/native";
const AddSchedule = ({navigation}) => {
    const { schedule, addSchedule} =useDataSchedule();
    const now = moment().valueOf();
    const [DateModalS, setDateModalS]= useState(false);
    const [valueDateS, setValueDateS]= useState('Pick Date');
    const [TimeModalS, setTimeModalS]= useState(false);
    const [valueTimeS, setValueTimeS]= useState('Pick Time');
    const [DateModalE, setDateModalE]= useState(false);
    const [valueDateE, setValueDateE]= useState('Pick Date');
    const [TimeModalE, setTimeModalE]= useState(false);
    const [valueTimeE, setValueTimeE]= useState('Pick Time');

    const [alarm, setAlarm]= useState(0);
    const [note, setNote]= useState("");
    const [title,setTitle]=useState("");
    //Switch
    const [AlarmSwitch, setAlarmSwitch]= useState(false);
    const [NoteSwitch, setNoteSwitch]= useState(false);
    const formatTime = (time) => {
        const selectedDate = new Date(time);
        const hours = selectedDate.getHours();
        const minutes = selectedDate.getMinutes();
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const period = hours >= 12 ? 'PM' : 'AM';
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };
    const formatDate = (dateT) =>{
        const selectedDate = new Date(dateT);
        const date= selectedDate.getDate();
        const month= selectedDate.getMonth()+1;
        const year = selectedDate.getFullYear();
        return `${date}/${month}/${year}`;
    }
    const handleAdd = ()=>{
        const timeS=formatTime(valueTimeS);
        const dateS=formatDate(valueDateS);
        const timeE=formatTime(valueTimeE);
        const dateE=formatDate(valueDateE);
        const id = schedule.length > 0 ? schedule[schedule.length-1].id + 1 : 0;
        const item = {
            id: id,
            title: title,
            dateS: dateS,
            dateE: dateE,
            timeS: timeS,
            timeE: timeE,
            alarm: alarm,
            note: note
        }
        addSchedule(item);
        setTitle("");
        setValueDateS("PickDate");
        setValueDateE("Pick Date");
        setValueTimeS("Pick Time");
        setValueTimeE("Pick Time");
        setAlarm(0);
        setNote("");
        navigation.navigate('HomeSchedule')
    }
    return ( 
        <View style={{flex:1, backgroundColor:'white', flexDirection:'column', padding:10}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.navigate('HomeSchedule')}}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 25, fontWeight:'bold'}}>Thêm lịch trình</Text>
                <View style={{marginStart:'auto', marginEnd:10}}></View>
            </View>
            <View style={{flexDirection:'column', margin:10}}>
                <View style={{ flexDirection: 'row', marginHorizontal:10, alignItems:'center', marginVertical:10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Tên</Text>
                    <TextInput
                        value={title}
                        autoComplete='false'
                        keyboardType='text'
                        placeholder="Tên của lịch trình"
                        onChangeText={txt => setTitle(txt)}
                        style={{ backgroundColor: '#fff',borderColor: '#000', marginHorizontal: 10, marginVertical: 10, borderBottomWidth:1, width:300}} />
                </View>
                {/* start */}
                <View style={{ flexDirection: 'column', marginHorizontal:10, marginVertical:10, alignItems:'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom:10}}>Thời gian bắt đầu</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity 
                            onPress={() => { setDateModalS(true)}}
                            style={{borderWidth:1, borderRadius:10, marginLeft:10, padding:10, flexDirection:'row'}}
                        >   
                            <Text style={{fontSize:15, marginRight:15}}>{valueDateS}</Text>
                            <AntDesign name='calendar' size={20} style={{marginLeft:15}} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {setTimeModalS(true)}}
                            style={{borderWidth:1, borderRadius:10, marginLeft:30, padding:10, flexDirection:'row'}}
                        >
                            <Text style={{fontSize:15, marginRight:10}}>{valueTimeS}</Text>
                            <AntDesign name='clockcircleo' size={20} style={{marginLeft:10}} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* end */}
                <View style={{ flexDirection: 'column', marginHorizontal:10, marginVertical:10, alignItems:'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom:10}}>Thời gian kết thúc</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity 
                            onPress={() => {setDateModalE(true)}}
                            style={{borderWidth:1, borderRadius:10, marginLeft:10, padding:10, flexDirection:'row'}}
                        >   
                            <Text style={{fontSize:15, marginRight:15}}>{valueDateE}</Text>
                            <AntDesign name='calendar' size={20} style={{marginLeft:15}} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {setTimeModalE(true)}}
                            style={{borderWidth:1, borderRadius:10, marginLeft:30, padding:10, flexDirection:'row'}}
                        >
                            <Text style={{fontSize:15, marginRight:10}}>{valueTimeE}</Text>
                            <AntDesign name='clockcircleo' size={20} style={{marginLeft:10}} />
                        </TouchableOpacity>
                    </View>
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
                                onTimeChange={(time) => {
                                    setValueTimeS(time);
                                    console.log("time: ", time);
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
                {/* date time end */}
                <Modal 
                    animationType="fade"
                    transparent={true}
                    visible={DateModalE}
                    onRequestClose={() => { setDateModalE(false) }}
                    style={{borderW:1, backgroundColor:'green'}}
                >
                    <TouchableOpacity
                        style={styles.modalBackground}
                        onPress={() => { setDateModalE(false) }}
                    >
                        <View style={styles.modalContent}>
                            <TimeDatePicker
                                selectedDate={now}
                                onMonthYearChange={(month) => {
                                    console.log("month: ", month);
                                }}
                                onSelectedChange={(selected) => {
                                    setValueDateE(selected);
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
                    visible={TimeModalE}
                    onRequestClose={() => { setTimeModalE(false) }}
                    style={{borderW:1, backgroundColor:'green'}}
                >
                    <TouchableOpacity
                        style={styles.modalBackground}
                        onPress={() => { setTimeModalE(false) }}
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
                                    console.log("month: ", month);
                                }}
                                onSelectedChange={(selected) => {
                                    console.log("selected: ", selected);
                                }}
                                onTimeChange={(time) => {
                                    console.log("time: ", time);
                                    setValueTimeE(time);
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
                {/* Alarm */}
                <View style={{flexDirection:'row', margin:10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000',marginEnd:'auto' }}>Nhắc nhở</Text>
                    <Switch 
                        value={AlarmSwitch}
                        onValueChange={(value)=> {setAlarmSwitch(value)}}
                    />
                </View>
                {AlarmSwitch === true ? (
                    <View style={{marginHorizontal:20, flexDirection:'row', padding:10, alignItems:'center'}}>
                        <Text style={{color:'black', fontSize:18, marginEnd:'auto'}}>Gửi thông báo trước: </Text>
                        <TextInput
                        value={alarm}
                        autoComplete='false'
                        keyboardType='text'
                        onChangeText={txt => setAlarm(txt)}
                        style={{ backgroundColor: '#fff',borderColor: '#000', borderBottomWidth:1, fontSize:18}} />
                        <Text style={{color:'black', fontSize:18, marginStart:'auto'}}>phút</Text>
                    </View>
                ) : ''}
                <View style={{flexDirection:'row', margin:10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000',marginEnd:'auto' }}>Ghi chú</Text>
                    <Switch 
                        value={NoteSwitch}
                        onValueChange={(value)=> {setNoteSwitch(value)}}
                    />
                </View>
                {NoteSwitch === true ? (
                    <View style={{marginHorizontal:20,padding:10, flexDirection:'row', borderRadius:10, height:200, borderColor:'#EEE5FF', backgroundColor:'#EEE5FF'}}>
                        <TextInput
                        value={note}
                        autoComplete='false'
                        keyboardType='text'
                        placeholder="Nhập ghi chú"
                        onChangeText={txt=>setNote(txt)}
                        style={{fontSize:18}} />
                    </View>
                ) : ''}
            </View>
            <TouchableOpacity onPress={handleAdd}  style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginVertical: 20, marginHorizontal: 50, backgroundColor: '#7F3DFF', borderRadius: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Hoàn tất</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
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
export default AddSchedule;
