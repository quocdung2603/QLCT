import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useData } from "../../DataContext";
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
function CharReport(props) {
    const typeReport=props.typeReport;
    const { hTransaction, budget } = useData();
    const [data,setData]=useState([]);
    const [dataChart, setDataChart] = useState([]);
    useEffect(()=>{
        //console.log(typeReport);
        const dt = [];
        const tt = [];
        const monthNow= new Date().getMonth()+1;
        //const currentDate = new Date();
        //const monthNow= new Date().getMonth()+1;
        let dataChart= new Map();
        budget.map((item)=>{
            dataChart.set(item.nameBudget,0);
        })
        dataChart.set("orther",0);
        const yearNow = new Date().getFullYear();
        const type=typeReport!==0? "add" : "str";
        //const monthNow= new Date().getMonth()+1;
        let sum=0;
        hTransaction.sort((a, b) => a.date - b.date);
        hTransaction.map((item) => {
            //console.log(item);
            if (item.typeTransaction==type && item.date.getMonth() + 1 === monthNow && yearNow === item.date.getFullYear()) {
                const tmp = parseInt(item.money);
                sum+=tmp;
                if(dataChart.get(item.budget)===undefined)
                {
                    const newValu=dataChart.get("orther")+tmp;
                    dataChart.set("orther",newValu);
                }
                else
                {
                    const newValu=dataChart.get(item.budget)+tmp;
                    dataChart.set(item.budget,newValu);
                }
            }
        })
        //console.log(sum);
        dataChart.forEach((valu,key)=>{
            console.log(key+" "+valu)
            tt.push(key);
            const tmp = sum>0 ? parseFloat(valu/sum) : 0;
            dt.push(tmp);
        })
        setDataChart(dt);
        const dt1 = {
            labels: tt,
            data: dt
        };
        setData(dt1);
    },[typeReport])
    return ( 
        dataChart.length>0 &&
        <ProgressChart
            data={data}
            width={screenWidth}
            height={220}
            strokeWidth={16}
            radius={24}
            chartConfig={chartConfig}
            hideLegend={false}
            />
     );
}

export default CharReport;