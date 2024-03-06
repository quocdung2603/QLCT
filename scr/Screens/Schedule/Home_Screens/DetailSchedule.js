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
const DetailSchedule = ({navigation}) => {
    const now = moment().valueOf();
    const [DateModalS, setDateModalS]= useState(false);
    const [valueDateS, setValueDateS]= useState('Pick Date');
    const [TimeModalS, setTimeModalS]= useState(false);
    const [valueTimeS, setValueTimeS]= useState('Pick Time');
    const [DateModalE, setDateModalE]= useState(false);
    const [valueDateE, setValueDateE]= useState('Pick Date');
    const [TimeModalE, setTimeModalE]= useState(false);
    const [valueTimeE, setValueTimeE]= useState('Pick Time');
    //Switch
    const [AlarmSwitch, setAlarmSwitch]= useState(false);
    const [NoteSwitch, setNoteSwitch]= useState(false);
    return ( 
        <View style={{flex:1, backgroundColor:'white', flexDirection:'column', padding:10}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.navigate('HomeSchedule')}}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 20, marginEnd: 'auto' }}>Edit Schedule</Text>
            </View>
            <View style={{flexDirection:'column', margin:10}}>
                <View style={{ flexDirection: 'row', marginHorizontal:10, alignItems:'center', marginVertical:10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Title</Text>
                    <TextInput
                        autoComplete='false'
                        keyboardType='text'
                        placeholder="Enter schedule's title"
                        style={{ backgroundColor: '#fff',borderColor: '#000', marginHorizontal: 10, marginVertical: 10, borderBottomWidth:1, width:300}} />
                </View>
                {/* start */}
                <View style={{ flexDirection: 'row', marginHorizontal:10, marginVertical:10, alignItems:'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Start</Text>
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
                {/* end */}
                <View style={{ flexDirection: 'row', marginHorizontal:10, marginVertical:10, alignItems:'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>End  </Text>
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
                                    console.log("month: ", month);
                                }}
                                onSelectedChange={(selected) => {
                                    console.log("selected: ", selected);
                                }}
                                onTimeChange={(time) => {
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
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
                {/* Alarm */}
                <View style={{flexDirection:'row', margin:10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000',marginEnd:'auto' }}>Alarm</Text>
                    <Switch 
                        value={AlarmSwitch}
                        onValueChange={(value)=> {setAlarmSwitch(value)}}
                    />
                </View>
                {AlarmSwitch === true ? (
                    <View style={{marginHorizontal:20, flexDirection:'row', padding:10, alignItems:'center'}}>
                        <Text style={{color:'black', fontSize:18, marginEnd:'auto'}}>Send notification before: </Text>
                        <TextInput
                        autoComplete='false'
                        keyboardType='text'
                        placeholder="10"
                        style={{ backgroundColor: '#fff',borderColor: '#000', borderBottomWidth:1, fontSize:18}} />
                        <Text style={{color:'black', fontSize:18, marginStart:'auto'}}>minutes</Text>
                    </View>
                ) : ''}
                <View style={{flexDirection:'row', margin:10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000',marginEnd:'auto' }}>Note</Text>
                    <Switch 
                        value={NoteSwitch}
                        onValueChange={(value)=> {setNoteSwitch(value)}}
                    />
                </View>
                {NoteSwitch === true ? (
                    <View style={{marginHorizontal:20,padding:10, flexDirection:'row', borderRadius:10, height:200, borderColor:'#EEE5FF', backgroundColor:'#EEE5FF'}}>
                        <TextInput
                        autoComplete='false'
                        keyboardType='text'
                        placeholder="Enter your note"
                        style={{fontSize:18}} />
                    </View>
                ) : ''}
            </View>
            <View style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginVertical: 20, marginHorizontal: 50, backgroundColor: '#7F3DFF', borderRadius: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Continue</Text>
            </View>
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
export default DetailSchedule;
