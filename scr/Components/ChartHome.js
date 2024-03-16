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
function ChartHome() {
    const {hTransaction}=useData();
    const [dataChart,setDataChart]=useState([]);
    const [titleChart,setTitleChart]=useState([]);
    const [data,setData]=useState(null);
    useEffect(()=>{
        const timeNow= new Date();
        const dt =[];
        const tt=[];
        hTransaction.sort((a,b)=>a.date-b.date);
        hTransaction.map((item)=>{
            //console.log(item);
            if(item.date.getDate()===timeNow.getDate() && item.date.getMonth()===timeNow.getMonth() && timeNow.getFullYear()===item.date.getFullYear())
            {
                const tmp = parseInt(item.money);
                dt.push(tmp);
                const h=item.date.getHours();
                const m=item.date.getMinutes();
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
    },[hTransaction])
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

export default ChartHome;