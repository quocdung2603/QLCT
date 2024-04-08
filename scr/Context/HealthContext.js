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
    const [allPost,setAllPost]=useState([]);
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

    //Lấy toàn bộ bài viết
    const getPost=async ()=>{
        try {
            const q = collection(db,"post");
            const docSnap = await getDocs(q);
            const dt=[];
            docSnap.docs.map((item)=>{
                dt.push(item.data());
            })
            console.log(dt);
            setAllPost(dt);
        } catch (error) {
            setTest(error)
        }
    }
    useEffect(()=>{
        getHistory();
        getPost();
        return ()=>{
            getExercise();
        }
    },[])
    
    return (
        <DataContext.Provider value={{allExercise,getExercise,historyExercise, addHistory,getHistory,allPost,getPost}}>
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
