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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDataSchedule } from "../../../Context/ScheduleContext";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const DetailSchedule = ({navigation,route}) => {
    const {deleteSchedule}=useDataSchedule();
    const item = route.params?.item || "Null";
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
    const handleCloseConfirmation = () => {
        setIsConfirmationVisible(false);
    };
    const handleConfirm = () => {
        deleteSchedule(item);
        handleCloseConfirmation();
        navigation.navigate("HomeSchedule");
    };
    return ( 
        <View style={{flex:1, backgroundColor:'white', flexDirection:'column', padding:10}}>
            <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => {navigation.navigate('HomeSchedule')}}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 20, fontWeight:'bold'}}>Chi tiết lịch trình</Text>
                <View style={{marginStart:'auto'}}></View>
                <TouchableOpacity
                    style={{ marginStart: 'auto' }}
                    onPress={() => { navigation.navigate("EditSchedule", { item }) }}
                >
                    <MaterialIcons name="edit" size={30} color='#00A86B' />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginStart: 'auto' }} onPress={() => { setIsConfirmationVisible(true) }}>
                    <Ionicons name='trash' size={30} color='black' />
                </TouchableOpacity>
                <Modal
                    visible={isConfirmationVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={handleCloseConfirmation}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                            <Text>Bạn xác nhận muốn xóa khum</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Button title="Hủy" onPress={handleCloseConfirmation} />
                                <Button title="Xác nhận" onPress={handleConfirm} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <Text style={{margin:10, fontSize:25, fontWeight:'bold', textAlign:'center'}}>{item.title}</Text>
            <View style={{flexDirection:'row', margin:10, alignItems:'center'}}>
                <View style={{flexDirection:'column', marginEnd:'auto'}}>
                    <Text style={{fontSize:19, fontWeight:'bold', textAlign:'center'}}>{item.dateS}</Text>
                    <Text style={{fontSize:19, fontWeight:'bold', textAlign:'center'}}>{item.timeS}</Text>
                </View>
                <View>
                    <Entypo name="arrow-bold-right" size={40} color="#D3BDFF" />
                </View>
                <View style={{flexDirection:'column', marginStart:'auto'}}>
                    <Text style={{fontSize:19, fontWeight:'bold', textAlign:'center'}}>{item.dateE}</Text>
                    <Text style={{fontSize:19, fontWeight:'bold', textAlign:'center'}}>{item.timeE}</Text>
                </View>
            </View>
            <View style={{flexDirection:'column', margin:10, backgroundColor:'#D3BDFF', borderWidth:1, borderColor:'#D3BDFF', borderRadius:10, padding:10}}>
                <Text style={{fontSize:18, color:'#000'}}>
                {item.note}
                </Text>
            </View>
        </View>
    )
}
export default DetailSchedule;
