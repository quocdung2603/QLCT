import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView
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
function ChartHomeMonth() {
    const { hTransaction } = useData();
    const [dataChart, setDataChart] = useState([]);
    const [titleChart, setTitleChart] = useState([]);
    const [data, setData] = useState(null);
    function getDataDate(timeNow) {
        let sum = 0;
        const yearNow = new Date().getFullYear();
        const monthNow= new Date().getMonth()+1;
        hTransaction.sort((a, b) => a.date - b.date);
        hTransaction.map((item) => {
            //console.log(item);
            if (item.date.getDate()==timeNow && item.date.getMonth() + 1 === monthNow && yearNow === item.date.getFullYear()) {
                const tmp = parseInt(item.money);
                sum += tmp;
            }
        })
        return sum;
    }
    useEffect(() => {
        const dt = [];
        const tt = [];
        //const currentDate = new Date();
        const monthNow= new Date().getMonth()+1;
        let len=0;
        if((monthNow%2===0 && monthNow>5) || (monthNow%2!==0 && monthNow<=5))
        len=31;
        else if(monthNow===2)
        {
            const yearNow= new Date().getFullYear();
            if(yearNow%4===0)
            {
                len=29;
            }
            else
            {
                len =28;
            }
        }
        else
        {
            len=30;
        }
        for (let i = 1; i <= len; i++) {
            const tmp = getDataDate(i);
            console.log(tmp);
            const title = i;
            tt.push(title);
            dt.push(tmp);
        }
        setDataChart(dt);
        const dt1 = {
            labels: tt,
            datasets: [
                {
                    data: dt,
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2,// optional
                    height: 12,
                    fontSize: 5
                }
            ],
            legend: ["Rainy Days"] // optional
        };
        setData(dt1);
    }, [hTransaction])
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                dataChart.length>0 &&
                <LineChart
                data={data}
                width={screenWidth * 2} // Đặt chiều rộng lớn hơn màn hình để có thể cuộn
                height={220}
                yAxisLabel=""
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
            }
        </ScrollView>
    );
}

export default ChartHomeMonth;