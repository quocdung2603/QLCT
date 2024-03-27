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
//icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDataSchedule } from "../../../Context/ScheduleContext";

const AddNote = ({navigation}) => {
    const {notes, addNote}=useDataSchedule();
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const handleAdd = ()=>{
        const time = new Date();
        const id = notes.length > 0 ? notes[notes.length-1].id+1 : 0;
        const item ={
            id: id,
            title: title,
            content: content,
            time: time
        }
        addNote(item);
        setTitle("");
        setContent("");
        navigation.navigate("TakeNote");
    }
    return (
        <View style={{flex:1, flexDirection:'column', margin:10, backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity 
                    style={{ marginRight: 'auto' }} 
                    onPress={() => {navigation.navigate("TakeNote")}}
                >
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 20, marginEnd:'auto'}}>Add Note</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Title</Text>
                <TextInput
                    value={title}
                    autoComplete='false'
                    keyboardType='text'
                    placeholder="Enter schedule's title"
                    onChangeText={txt => setTitle(txt)}
                    style={{ backgroundColor: '#fff', borderColor: '#000', marginHorizontal: 10, marginVertical: 10, borderBottomWidth: 1, width: 300 }} />
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Main content</Text>
            <View style={{flexDirection: 'column', marginHorizontal: 10, marginVertical: 10, borderWidth:1, borderRadius:10, borderColor:'#D3BDFF', height:300, backgroundColor:'#D3BDFF'}}>
                <TextInput
                    value={content}
                    autoComplete='false'
                    keyboardType='text'
                    placeholder="Enter main content"
                    multiline
                    onChangeText={txt => setContent(txt)}
                    style={{marginHorizontal: 10, marginVertical: 10}} />
            </View>
            <TouchableOpacity onPress={handleAdd} style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginVertical: 20, marginHorizontal: 50, backgroundColor: '#7F3DFF', borderRadius: 20, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddNote;