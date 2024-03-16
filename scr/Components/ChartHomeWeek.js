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
function ChartHomeWeek() {
    const { hTransaction } = useData();
    const [dataChart, setDataChart] = useState([]);
    const [titleChart, setTitleChart] = useState([]);
    const [data, setData] = useState(null);
    function getDataDate(timeNow) {
        let sum =0;
        hTransaction.sort((a,b)=>a.date-b.date);
        hTransaction.map((item)=>{
            //console.log(item);
            if(item.date.getDate()===timeNow.getDate() && item.date.getMonth()===timeNow.getMonth() && timeNow.getFullYear()===item.date.getFullYear())
            {
                const tmp = parseInt(item.money);
                sum+=tmp;
            }
        })
        return sum;
    }
    useEffect(() => {
        const timeNow = new Date();
        const dt = [];
        const tt = [];
        const currentDate = new Date();

        // Lấy thứ của ngày hiện tại (0 - Chủ Nhật, 1 - Thứ Hai, ..., 6 - Thứ Bảy)
        const currentDayOfWeek = currentDate.getDay();

        // Lấy ngày đầu tiên của tuần
        const startOfCurrentWeek = new Date(currentDate);
        startOfCurrentWeek.setDate(currentDate.getDate() - currentDayOfWeek);

        // Lấy ngày cuối cùng của tuần
        const endOfCurrentWeek = new Date(currentDate);
        endOfCurrentWeek.setDate(currentDate.getDate() + (6 - currentDayOfWeek));

        // Tạo một mảng các ngày trong tuần
        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfCurrentWeek);
            day.setDate(startOfCurrentWeek.getDate() + i+1);
            const money=getDataDate(day);
            dt.push(money);
        }
        
        setDataChart(dt);
        const dt1 = {
            labels: ["THứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ nhật"],
            datasets: [
                {
                    data: dt,
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2,// optional
                    height: 12
                }
            ],
            legend: ["Rainy Days"] // optional
        };
        setData(dt1);
    }, [hTransaction])
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

export default ChartHomeWeek;