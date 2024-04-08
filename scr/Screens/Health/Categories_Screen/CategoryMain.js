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
import { useDataHealth } from '../../../Context/HealthContext';

const CategoryMain = ({ navigation }) => {
    const { allExercise, getExercise,allPost,getPost } = useDataHealth();
    const [exercises, setExercises] = useState([]);
    const [posts,setPosts]=useState([]);
    const [checkChange, setCheckChange] = useState(0);
    useEffect(() => {
        if (allExercise.length <= 0)
            getExercise();
        else {
            setExercises(allExercise[0].exercises);
        }
        if(allPost.length<=0)
        {
            getPost();
        }
        else
        {
            setPosts(allPost);
        }
    }, [allExercise,allPost])

    const handleChange = (id) => {
        setExercises(allExercise[id].exercises);
        setCheckChange(id);
    }
    const [exercise, setExercise] = useState(null);
    const [MChiTietBT, setMChiTietBT] = useState(false);

    //tab 
    const [mainTab, setmainTab] = useState(1);
    return (
        <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Kho bài tập</Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}
                >
                    <AntDesign name='bells' size={30} color='black' />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => { setmainTab(1) }}
                    style={{ borderWidth: 1, backgroundColor: mainTab === 1 ? '#7F3DFF' : 'grey', borderColor: mainTab === 1 ? '#7F3DFF' : 'grey', borderRadius: 10, paddingVertical: 5, paddingHorizontal: 20, marginEnd: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: mainTab === 1 ? '#fff' : '#000' }}>Bài  Tập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setmainTab(0) }}
                    style={{ borderWidth: 1, backgroundColor: mainTab === 0 ? '#7F3DFF' : 'grey', borderColor: mainTab === 0 ? '#7F3DFF' : 'grey', borderRadius: 10, paddingVertical: 5, paddingHorizontal: 20, marginEnd: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: mainTab === 0 ? '#fff' : '#000' }}>Bài Viết</Text>
                </TouchableOpacity>
            </View>
            {mainTab === 1 ? (
                allExercise.length > 0 ?
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                        <View style={{ flexDirection: 'row', margin: 10, maxHeight: 40 }}>
                            {
                                allExercise.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => { handleChange(index) }}
                                        style={{ borderWidth: 1, borderRadius: 10, padding: 5, marginHorizontal: 5, backgroundColor: checkChange === index ? "#8F57FF" : "#fff", borderColor: checkChange === index ? "#8F57FF" : "grey" }}>
                                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: checkChange === index ? "#fff" : "#000" }}>{item.name}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <Text style={{ margin: 10, fontSize: 22, fontWeight: 'bold', color: '#000' }}>Các bài tập</Text>
                        <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                            {
                                exercises.length > 0 ? exercises.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => { setMChiTietBT(true), setExercise(item) }}
                                        style={{ marginVertical: 4, marginHorizontal: 30, flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 10, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>{item.name}</Text>
                                        <View style={{ marginStart: 'auto', backgroundColor: 'yellow' }}>
                                            <Image
                                                source={{ uri: item.image }}
                                                width={80}
                                                height={60}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                )) :
                                    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Chưa có bài tập nào cả</Text>
                                    </View>
                            }
                        </ScrollView>
                        <Modal animationType='slide' transparent={true} visible={MChiTietBT} onRequestClose={() => { setMChiTietBT(false) }} >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <View style={{ flexDirection: 'column', backgroundColor: 'white', width: 400, height: 700, borderRadius: 10, padding: 20 }}>
                                    <ExcersiseItem TatModal={setMChiTietBT} exercise={exercise} />
                                </View>
                            </View>
                        </Modal>
                    </View> :
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Loading...</Text>
                    </View>
            ) : (
                    <ScrollView>
                        {
                            posts.length > 0 ?
                                posts.map((item,index) => (
                                    <View key={index} style={{ flexDirection: 'column', flex: 1 }}>
                                        <View style={{ flexDirection: 'column', margin: 10, borderWidth: 1, borderRadius: 10, padding: 5 }}>
                                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000' }}>{item.title}</Text>
                                            <Text style={{ textAlign: 'justify', fontSize: 16, marginHorizontal: 10 }}>
                                                {item.content}
                                            </Text>
                                            <View style={{ margin: 10, borderWidth: 1, height: 300, backgroundColor: 'yellow' }}>
                                                {/* hình ảnh / video kèm thêm */}
                                                <Image
                                                    source={{ uri: item.img }}
                                                    width="100%"
                                                    height={300}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                ))
                            :
                            <Text>Chưa có bài viết nào cả</Text>
                        }
                    </ScrollView>
            )}
        </View>

    )
}
export default CategoryMain;