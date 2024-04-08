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
import { useNavigation } from '@react-navigation/native';
//icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { useDataSchedule } from "../../../Context/ScheduleContext";


const TakeNote = ({ navigation }) => {
    const { notes, deleteNote, choiceFlag } = useDataSchedule();
  
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
    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}>Bảng ghi chú</Text>
                <TouchableOpacity
                    style={{ marginStart: 'auto' }}
                    onPress={() => { navigation.navigate("AddNote") }}
                >
                    <AntDesign name='plus' size={35} color='#000' />
                </TouchableOpacity>
            </View>
            {
                notes.map((item,index) => {
                    return <TouchableOpacity
                        key={index}
                        onPress={() => { navigation.navigate("DetailNote",{item}) }}
                        style={{ flexDirection: 'column', margin: 10, borderColor: '#D3BDFF', borderWidth: 1, borderRadius: 10, padding: 10, backgroundColor: '#D3BDFF' }}
                    >
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ fontSize: 20, color: '#7F3DFF', marginEnd: 'auto', fontWeight: 'bold' }}>{formatDate(item.time)}</Text>
                            <Text style={{ fontSize: 20, color: '#7F3DFF', marginEnd: 'auto', fontWeight: 'bold' }}>{formatTime(item.time)}</Text>
                            <TouchableOpacity
                                style={{ marginStart: 'auto' }}
                                onPress={()=>{
                                    choiceFlag(item);
                                }}
                            >
                                <Ionicons name="flag" size={30} color='#FD3C4A' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginStart: 'auto' }}
                                onPress={() => { navigation.navigate("EditNote",{item}) }}
                            >
                                <MaterialIcons name="edit" size={30} color='#00A86B' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginStart: 'auto' }}
                                onPress={()=>{
                                    deleteNote(item);
                                }}
                            >
                                <Ionicons name="trash-bin" size={30} color='#464A4C' />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, margin: 10 }}>{item.title}</Text>
                    </TouchableOpacity>
                })
            }
        </View>
    );
}

export default TakeNote;
