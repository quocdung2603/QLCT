// DataContext.js
import { createContext, useContext, useEffect, useState } from 'react';
const DataContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
const DataProviderHealth = ({ children }) => {
    const [test,setTest]=useState(null);
    const [allExercise,setAllExercise]=useState([]);
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
        return ()=>{
            getExercise();
        }
    },[])
    
    return (
        <DataContext.Provider value={{allExercise,getExercise}}>
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
