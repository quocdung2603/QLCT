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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const EditPlan = ({ navigation }) => {
    const [MThemBT, setMThemBT] = useState(false)
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => { navigation.goBack() }}>
                    <AntDesign name='arrowleft' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{fontSize:22, fontWeight:'bold', color:'#000'}}>Tập Vai</Text>
                <TouchableOpacity 
                    style={{ marginStart: 'auto' }} 
                    onPress={() => { 
                    // bấm nút này sẽ lưu lại cái danh sách bài tập 
                }}>
                    <AntDesign name='check' size={30} color='#000' />
                </TouchableOpacity>
            </View>
            <Text style={{margin:10, fontSize:20, fontWeight:'bold', color:'#000'}}>Danh sách bài tập</Text>
            <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:30, fontWeight:'bold', marginEnd:'auto', marginStart:10}}>1.</Text>
                    <View style={{flexDirection:'column', width:320}} >
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('ExcersiseItem') }}
                            style={{marginVertical: 4, flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 10, alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>Nghiêng vai với tạ đơn</Text>
                            <View style={{ marginStart: 'auto', backgroundColor: 'yellow' }}>
                                <Text>Hình ảnh</Text>
                                <Text>Hình ảnh</Text>
                                <Text>Hình ảnh</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row', alignItems:'center', marginVertical:5, padding:5, borderWidth:1, borderRadius:10}}>
                            <View style={{flexDirection:'row', alignItems:'center', marginEnd:'auto'}}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>Số lần</Text>
                                <TextInput keyboardType='number-pad' placeholder='0' style={{marginStart:10, borderWidth:1, maxHeight:40, width:60, textAlign:'center'}} />
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', marginStart:'auto'}}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>Số hiệp</Text>
                                <TextInput keyboardType='number-pad' placeholder='0' style={{marginStart:10, borderWidth:1, maxHeight:40, width:60, textAlign:'center'}} />
                            </View>
                        </View>     
                    </View>
                    <TouchableOpacity style={{marginEnd:10, marginStart:'auto'}} onPress={() => {
                        //bấm nút này sẽ xóa cái bài tập này ra khỏi danh sách
                    }}>
                        <AntDesign name='delete' size={30} color='#000' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity 
                onPress={() => {setMThemBT(true)}}
                style={{margin:10, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold', borderWidth:1, borderRadius:10, padding:5}}>Thêm bài tập</Text>
            </TouchableOpacity>
            <Modal animationType='slide' transparent={true} visible={MThemBT} onRequestClose={() => { setMThemBT(false) }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{flexDirection:'column', backgroundColor: 'white', width: 400, height: 500, borderRadius: 10,  padding: 20 }}>
                        <TouchableOpacity onPress={() => {setMThemBT(false)}} style={{flexDirection:'row', alignItems:'center', marginBottom:10}}>
                            <Text style={{marginStart:'auto', fontSize:20, fontWeight:'bold', color:'#000'}}>Thêm bài tập</Text>
                            <AntDesign name="close" size={30} color='#000' style={{marginStart:'auto'}} />
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',alignItems:'center', margin:10, borderWidth:1, borderRadius:10, paddingHorizontal:5}}>
                            <TextInput keyboardType='text' placeholder='Tìm kiếm bài tập ...'  style={{maxHeight:40, marginEnd:'auto'}} />
                            <AntDesign name="search1" size={30} color='#000' style={{marginStart:'auto'}} />
                        </View>
                        <TouchableOpacity
                            onPress={() => { 
                                //thêm bài tập vào danh sách
                            }}
                            style={{marginVertical: 4, flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 10, alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>Nghiêng vai với tạ đơn</Text>
                            <View style={{ marginStart: 'auto', backgroundColor: 'yellow' }}>
                                <Text>Hình ảnh</Text>
                                <Text>Hình ảnh</Text>
                                <Text>Hình ảnh</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default EditPlan;