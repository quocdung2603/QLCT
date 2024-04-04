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
    Image,
    TextInput,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from '../../Expense/Home_Screen/Home';

// 
import ExcersiseItem from '../Excersise_Screen/ExcersiseItem';

const CategoryMain = ({ navigation }) => {
    const [Shouder, setShouder] = useState(1)
    const [Back, setBack] = useState(0)
    const [Chest, setChest] = useState(0)
    const [Pack, setPack] = useState(0)
    const [Leg, setLeg] = useState(0)

    //
    const [MChiTietBT, setMChiTietBT] = useState(false);
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='bells' size={30} color='black' />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', margin: 10, maxHeight: 40 }}>
                <TouchableOpacity 
                    onPress={() => {setShouder(1), setChest(0), setPack(0), setLeg(0), setBack(0)}}
                    style={{width:68, borderWidth: 1, borderRadius: 10, padding: 5, marginHorizontal: 5, backgroundColor: Shouder === 1 ? "#8F57FF" : "#fff", borderColor: Shouder === 1 ? "#8F57FF" : "grey" }}>
                    <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold', color: Shouder === 1 ? "#fff" : "#000" }}>Vai</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {setShouder(0), setChest(0), setPack(0), setLeg(0), setBack(1)}}
                    style={{width:68, borderWidth: 1, borderRadius: 10, padding: 5, marginHorizontal: 5, backgroundColor: Back === 1 ? "#8F57FF" : "#fff", borderColor: Back === 1 ? "#8F57FF" : "grey" }}>
                    <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold', color: Back === 1 ? "#fff" : "#000" }}>Lưng</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {setShouder(0), setChest(1), setPack(0), setLeg(0), setBack(0)}}
                    style={{width:68, borderWidth: 1, borderRadius: 10, padding: 5, marginHorizontal: 5, backgroundColor: Chest === 1 ? "#8F57FF" : "#fff", borderColor: Chest === 1 ? "#8F57FF" : "grey" }}>
                    <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold', color: Chest === 1 ? "#fff" : "#000" }}>Ngực</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {setShouder(0), setChest(0), setPack(0), setLeg(1), setBack(0)}}
                    style={{width:68, borderWidth: 1, borderRadius: 10, padding: 5, marginHorizontal: 5, backgroundColor: Leg === 1 ? "#8F57FF" : "#fff", borderColor: Leg === 1 ? "#8F57FF" : "grey" }}>
                    <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold', color: Leg === 1 ? "#fff" : "#000" }}>Chân</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {setShouder(0), setChest(0), setPack(1), setLeg(), setBack(0)}}
                    style={{width:68, borderWidth: 1, borderRadius: 10, padding: 5, marginHorizontal: 5, backgroundColor: Pack === 1 ? "#8F57FF" : "#fff", borderColor: Pack === 1 ? "#8F57FF" : "grey" }}>
                    <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold', color: Pack === 1 ? "#fff" : "#000" }}>Bụng</Text>
                </TouchableOpacity>
            </View>
            <Text style={{margin:10, fontSize:22, fontWeight:'bold', color:'#000'}}>Các bài tập</Text>
            {Shouder === 1 ? (
                <ScrollView style={{flex:1, flexDirection:'column', backgroundColor:'#fff'}}>
                    <TouchableOpacity 
                        onPress={() => {setMChiTietBT(true)}}
                        style={{ marginVertical: 4, marginHorizontal:30, flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 10, alignItems:'center' }}>
                        <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>Nghiêng vai với tạ đơn</Text>
                        <View style={{ marginStart: 'auto', backgroundColor: 'yellow' }}>
                            <Text>Hình ảnh</Text>
                            <Text>Hình ảnh</Text>
                            <Text>Hình ảnh</Text>
                        </View>
                    </TouchableOpacity>
            </ScrollView>
            ) : ""}
            {Chest === 1 ? (
                <View style={{flex:1,flexDirection:'column', backgroundColor:'#fff'}}></View>
            ) : ""}
            {Back === 1 ? (
                <View style={{flex:1,flexDirection:'column', backgroundColor:'#fff'}}></View>
            ) : ""}
            {Pack === 1 ? (
                <View style={{flex:1,flexDirection:'column', backgroundColor:'#fff'}}></View>
            ) : ""}
            {Leg === 1 ? (
                <View style={{flex:1,flexDirection:'column', backgroundColor:'#fff'}}></View>
            ) : ""}
            <Modal animationType='slide' transparent={true} visible={MChiTietBT} onRequestClose={() => { setMChiTietBT(false) }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{flexDirection:'column', backgroundColor: 'white', width: 400, height: 700, borderRadius: 10,  padding: 20 }}>
                        <ExcersiseItem TatModal={setMChiTietBT} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default CategoryMain;