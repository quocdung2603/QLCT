// DataContext.js
import { createContext, useContext, useEffect, useState } from 'react';
const DataContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
const DataProviderHealth = ({ children }) => {
    const [test,setTest]=useState(null);
    const [allExercise,setAllExercise]=useState([]);
    const [historyExercise,setHistotyExercise]=useState([]);

    //Lịch sử luyện tập
    const getHistory = ()=>{
        AsyncStorage.getItem("historyExercise")
        .then(value=>{
          if(value!=null)
          {
            const tmp=JSON.parse(value);
            const dt=[];
            tmp.map((item)=>{
              let t=item;
              t.timeComple=new Date(item.timeComple);
              dt.push(t);
            })
            const sortedTransactions = dt.sort((a, b) => b.timeComple - a.timeComple);
            console.log("Bắt đầu nek");
            sortedTransactions.map((item)=>{
                console.log("bài tập: "+item.id);
                console.log(item);
            })
            setHistotyExercise(sortedTransactions);
          }
          else
          setHistotyExercise([]);
        })
    }
    const addHistory = async (newData)=>{
        const tmp = historyExercise;
        tmp.push(newData);
        console.log("Lịch sử lưu");
        console.log(tmp);
        await AsyncStorage.setItem("historyExercise",JSON.stringify(tmp));
        getHistory();
    }
    //Lấy toàn bộ bài tập từ admin
    const getExercise = async ()=>{
        try {
            const q = collection(db,"exercise");
            const docSnap = await getDocs(q);
            const dt=[];
            docSnap.docs.map((item)=>{
                dt.push(item.data());
            })
            setAllExercise(dt);
        } catch (error) {
            setTest(error)
        }
    }
    useEffect(()=>{
        getHistory();
        return ()=>{
            getExercise();
        }
    },[])
    
    return (
        <DataContext.Provider value={{allExercise,getExercise,historyExercise, addHistory}}>
            { 
                children 
            }
        </DataContext.Provider>
    );
};


const useDataHealth = () => {
    return useContext(DataContext);
};

export { DataProviderHealth, useDataHealth };
