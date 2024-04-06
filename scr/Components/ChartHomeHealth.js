import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    LineChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useData } from '../../DataContext';
import { useDataHealth } from '../Context/HealthContext';
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#000000",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#000000",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional\
   
};
function ChartHomeHealth(props) {

    const {historyExercise}=useDataHealth();
    const [dataChart,setDataChart]=useState([]);
    const [titleChart,setTitleChart]=useState([]);
    const [data,setData]=useState(null);
    useEffect(()=>{
        const timeNow= props.timeNow;
        const dt =[];
        const tt=[];
        historyExercise.sort((a,b)=>a.date-b.date);
        historyExercise.map((item)=>{
            //console.log(item);
            if(item.timeComple.getDate()===timeNow.getDate() && item.timeComple.getMonth()===timeNow.getMonth() && timeNow.getFullYear()===item.timeComple.getFullYear())
            {
                const tmp = parseInt(item.sumCarlo);
                dt.push(tmp);
                const h=item.timeComple.getHours();
                const m=item.timeComple.getMinutes();
                const time= h+":"+m;
                //console.log(time);
                tt.push(time);
            }
        })
        //console.log(tt);
        //console.log(dt);
        setDataChart(dt);
        setTitleChart(tt);
        const dt1={
            labels: tt,
            datasets: [
                {
                    data: dt,
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 ,// optional
                    height: 12
                }
            ],
            legend: ["Rainy Days"] // optional
        };
        setData(dt1);
    },[historyExercise])
    return (
        <View>
            {    
                dataChart.length>0 && titleChart && <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    verticalLabelRotation={0}
                    chartConfig={chartConfig}
                    bezier
                /> 
            }
        </View>
    );
}

export default ChartHomeHealth;