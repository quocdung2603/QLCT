import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    TouchableWithoutFeedback,
    Text,
    Dimensions,
    TouchableOpacity,
    Modal,
    ScrollView,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDataHealth } from '../../../Context/HealthContext';
import ExcersiseItem from '../Excersise_Screen/ExcersiseItem';
import { ProgressChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#000000",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#000000",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.2,
    useShadowColorFromDataset: false, // optional\,
   
};
const DetailDay = ({ navigation, TatModal,timeNow}) => {
    const {historyExercise,getHistory,allExercise,getExercise}=useDataHealth();
    const [dataChart,setDataChart]=useState([]);
    const [titleChart,setTitleChart]=useState([]);
    const [data,setData]=useState(null);
    const [sumCarlo,setSumCalo]=useState(0);
    const [MChiTietBT, setMChiTietBT] = useState(false);
    function timeStringToMinutes(timeString) {
        var parts = timeString.split(":");
        var hours = parseInt(parts[0]);
        var minutes = parseInt(parts[1]);
        return hours * 60 + minutes;
    }
    function formatTotalTime(totalSeconds) {
        var hours = Math.floor(totalSeconds / 3600); // Tính số giờ
        var remainingSeconds = totalSeconds % 3600; // Số giây còn lại sau khi tính giờ
        var minutes = Math.floor(remainingSeconds / 60); // Tính số phút
        var seconds = remainingSeconds % 60; // Số giây còn lại
    
        // Format chuỗi giờ, phút, giây
        var formattedTime = hours.toString().padStart(2, '0') + ":" +
                            minutes.toString().padStart(2, '0') + ":" +
                            seconds.toString().padStart(2, '0');
    
        return formattedTime;
    }
    const [sumTimeExercise,setSumTimeExercise]=useState(0);
    const dataChart1 = new Map();

    useEffect(()=>{
        if(allExercise.length <=0)
        {
            getExercise();
        }
        if(historyExercise.length>0)
        {
            historyExercise.map((item)=>{
                dataChart1.set(item.idBt,0);
            })
            const dt =[];
            const tt=[];
            const data=[];
            historyExercise.sort((a,b)=>b.timeComple-a.timeComple);
            let sum=0;
            let sum1=0;
            historyExercise.map((item)=>{
                if(item.timeComple.getDate()===timeNow.getDate() && item.timeComple.getMonth()===timeNow.getMonth() && timeNow.getFullYear()===item.timeComple.getFullYear())
                {
                    data.push(item);
                    sum1+=item.sumCarlo;
                    sum+=timeStringToMinutes(item.timeExercise);
                    const newValu= dataChart1.get(item.idBt)+item.sumCarlo;
                    dataChart1.set(item.idBt,newValu);
                }
            })
            setSumCalo(sum1)
            setSumTimeExercise(formatTotalTime(sum));
            setDataChart(data);
            dataChart1.forEach((valu,key)=>{
                const tmp = historyExercise.find(item=>item.idBt===key);
                console.log(tmp.nameBt+" "+valu);
                tt.push("id: "+key);
                const tmp1 = sum1>0 ? parseFloat(valu/sum1) : 0;
                dt.push(tmp1);
            })
            const dt1 = {
                labels: tt,
                data: dt
            };
            setData(dt1);
        }
        else
        {
            getHistory();
        }

    },[historyExercise,timeNow])
    const formatTime = (time) => {
        const selectedDate = time;
        const hours = selectedDate.getHours();
        const minutes = selectedDate.getMinutes();
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes}`;
    };

    //Xem chi tiết bài tập đã tập
    const [exercise,setExercise]=useState(null);
    const [checkBt,setCheckBt]=useState(false);
    const handleDetailExercise = (id)=>{
        console.log(id);
        let check =0;
        allExercise.map((item)=>{
            const tmp =item.exercises;
            const ex=tmp.find(it=>it.id===id);
            if(ex!==undefined)
            {
                setExercise(ex);
                check=1;
                return;
            }
        })
        if(check===0)
        {
            setCheckBt(true);
        }
        setMChiTietBT(true);
    }   
    return (
        <View style={{ flexDirection: 'column', backgroundColor: 'white', width: 400, height: 700, borderRadius: 10, padding: 20 }}>
            <TouchableOpacity onPress={() => { TatModal(false) }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ marginStart: 'auto', fontSize: 20, fontWeight: 'bold', color: '#000' }}>Chi tiết ngày tập</Text>
                <AntDesign name="close" size={30} color='#000' style={{ marginStart: 'auto' }} />
            </TouchableOpacity>
            <ScrollView>
                <View style={{ flexDirection: 'column', margin: 5 }}>
                    <View style={{ height: 200, backgroundColor: 'yellow' }}>
                        {/* biểu đồ tròn thể hiện calo */}
                        {
                            dataChart.length>0 &&
                            <ProgressChart
                            data={data}
                            width={350}
                            height={200}
                            strokeWidth={16}
                            radius={24}
                            chartConfig={chartConfig}
                            hideLegend={false}
                            />
                        }
                    </View>
                    <View style={{ flexDirection: 'column', marginVertical: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>Tổng Thời Gian Luyện Tập</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>{sumTimeExercise}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginVertical: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>Tổng Calo Tiêu Tốn</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>{sumCarlo}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', textAlign: 'center', margin: 10 }}>Danh sách các bài đã tập</Text>
                {
                    dataChart.length>0 && dataChart.map((item,index) => (
                        <TouchableOpacity onPress={()=>{handleDetailExercise(item.idBt)}} key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000', marginEnd: 'auto' }}>{formatTime(item.timeComple)}</Text>
                            <View style={{ width: 300, marginVertical: 3, flexDirection: 'row', borderWidth: 1, borderRadius: 10, padding: 8, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>{item.nameBt}</Text>
                                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>id: {item.idBt}</Text>
                                    <Text style={{ fontSize: 14, color: '#000' }}>Tổng carlo {item.sumCarlo}</Text>
                                    <Text style={{ fontSize: 14, color: '#000' }}>Thời gian tập {item.timeExercise}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <Modal animationType='slide' transparent={true} visible={MChiTietBT} onRequestClose={() => { setMChiTietBT(false) }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ flexDirection: 'column', backgroundColor: 'white', width: 400, height: 700, borderRadius: 10, padding: 20 }}>
                        {
                            checkBt === true ?
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                    <Text>Bài tập không có trên hệ thống</Text>
                                    <TouchableOpacity style={{ marginStart: 'auto' }} onPress={() => { TatModal(false) }}>
                                        <AntDesign name='close' size={30} color='#000' />
                                    </TouchableOpacity>                               
                                </View> :
                            <ExcersiseItem TatModal={setMChiTietBT} exercise={exercise} />
                        }
                    </View>
                </View>
            </Modal>
        </View>
    )

}

export default DetailDay