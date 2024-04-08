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
import { Button, CheckBox } from '@rneui/base';
import { Dropdown } from 'react-native-element-dropdown';
import { useDataHealth } from '../../../Context/HealthContext';

const ExcersiseMain = ({navigation}) => {
    const {allExercise, getExercise,addHistory,historyExercise}=useDataHealth();
    const [dataEx,setDataEx] = useState([]);
    const [exercises,setExercises]=useState([]);
    useEffect(()=>{
        if(allExercise.length<=0)
        getExercise();
        else
        {   
            const dt = [];
            allExercise.map((item,index)=>{
                const it = {
                    label: item.name,
                    value: index
                }
                dt.push(it);
            });
            setDataEx(dt);
            setExercises(allExercise[0].exercises);
        }
    },[allExercise])
    const [SE, setSE] = useState(0)
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log("haha");
    };

    //NGười dùng chọn vào mục cần tập sau đó hiển thị bài tập trong mục lớn 
    
    function handleChangeDropdown (id){
        setExercises(allExercise[id].exercises);
    }
    const [PlanExx, setPlanExx] = useState("")
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === PlanExx && (
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
    const handleStr = async ()=>{
        try {
            const item = {
                PlanExx: PlanExx
            }
            setPlanExx("")
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert("lỗi");
            console.log(error);
        }
    }

    //Xử lý khi bấm bắt đầu tập
    const [minute,setMinute]=useState(0);
    const [seconds,setSconds]=useState(0);
    const [carlo,setCarlo]=useState(0);
    const [selectExercise,setSelectExercise]=useState(null);
    useEffect(()=>{
        if(SE==1)
        {
            setTimeout(()=>{
                if(selectExercise!=null)
                setCarlo(carlo+selectExercise.carlo);
                else
                setCarlo(carlo+1);

                if(seconds+1===60)
                {
                    setSconds(0);
                    setMinute(minute+1);
                }
                else
                {
                    setSconds(seconds+1);
                }
            },1000)
        }
        else
        {
            setCarlo(0);
            setMinute(0);
            setSconds(0);
            setSE(0);
        }
    },[SE,minute,seconds])
    function formattime(value) {
        if(value<10)
        return "0"+value;
        else
        return value;
    }
    const handleSelectExersicec = (item)=>{
        setSelectExercise(item);
    }
    const handleUnSelectExersicec = ()=>{
        setSelectExercise(null);
    }
    const handleSave = ()=>{
        const time = new Date();
        const timeE= formattime(minute)+":"+formattime(seconds);
        const id = historyExercise.length;
        const idBt = selectExercise==null ? "orther" : selectExercise.id;
        const nameBt = selectExercise==null ? "Bài tập tự do" : selectExercise.name;
        const data = {
            id: id,
            idBt: idBt,
            nameBt: nameBt,
            timeComple: time,
            timeExercise: timeE,
            sumCarlo: carlo
        }
        addHistory(data);
        setSE(0);
    }
    return(
        allExercise.length> 0 && dataEx.length>0 ?
        <View style={{flex:1, flexDirection:'column', backgroundColor:'#fff'}}>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto' }}>
                    <Octicons name='three-bars' size={30} color='#000' />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Luyện tập</Text>
                <View style={{marginStart:'auto', marginEnd:10}}></View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dataEx}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Chọn danh sách bài tập"
                    searchPlaceholder="Search..."
                    value={PlanExx}
                    onChange={item => {
                        handleChangeDropdown(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    )}
                    renderItem={renderItem}
                />
                <TouchableOpacity
                    onPress={() => { SE === 0 ? setSE(1) : handleSave()}}
                    style={{marginStart:'auto', marginEnd:10,padding:5, borderWidth:1, borderRadius:10, borderColor:'#7F3DFF', backgroundColor:'#7F3DFF'}}>
                    {SE === 0 ? (
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Bắt đầu</Text>
                    ) : (
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Kết thúc</Text>
                    )}
                </TouchableOpacity>
            </View> 
            
            <View style={{ flexDirection: 'column', margin: 10 }}>
                <Text style={{fontSize:18, fontWeight:'bold', textAlign:'center'}}>Tổng thời gian tập luyện</Text>
                <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>{formattime(minute)}:{formattime(seconds)}</Text>
            </View>

            <View style={{ flexDirection: 'column', margin: 10 }}>
                <Text style={{fontSize:18, fontWeight:'bold', textAlign:'center'}}>Tổng số calo tiêu hao</Text>
                <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>{carlo}</Text>
            </View>        
            <View style={{ flexDirection: 'column', marginStart:10}}>
                <Text style={{fontSize:18, margin:10, fontWeight:'bold'}}>Danh sách bài tập</Text>
                {/* bt 1 */}
                {
                    exercises.length>0 && exercises.map((item,index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('ExcersiseItem') }}
                                style={{ margin: 10, marginEnd: 'auto', flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 10, alignItems: 'center' }}>
                                <View style={{ marginEnd: 'auto', width: 210 }}>
                                    <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 15, color: '#000' }}>15 lần / hiệp</Text>
                                </View>
                                <View style={{ marginStart: 'auto', backgroundColor: 'yellow' }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        width={50}
                                        height={50}
                                    />
                                </View>
                            </TouchableOpacity>
                            {
                                selectExercise === item ?
                                    <TouchableOpacity 
                                        style={{marginEnd:10, backgroundColor:'#7F3DFF', borderWidth:1, borderRadius:10, borderColor:'#7F3DFF', padding:5}} 
                                        onPress={() => { handleUnSelectExersicec() }}>
                                        <Text style={{fontSize:18, fontWeight:'bold', color:'#fff'}}>Hủy chọn</Text>
                                    </TouchableOpacity> :
                                    <TouchableOpacity 
                                        style={{marginEnd:10, backgroundColor:'#7F3DFF', borderWidth:1, borderRadius:10, borderColor:'#7F3DFF', padding:5}} 
                                        onPress={() => { handleSelectExersicec(item) }}>
                                        <Text style={{fontSize:18, fontWeight:'bold', color:'#fff'}}>Chọn</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    ))
                }
            </View>
        </View>:
        <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Loading...</Text>
        </View>
    )
}

export default ExcersiseMain;
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
        width:250
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