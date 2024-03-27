// DataContext.js
import { createContext, useContext, useEffect, useState } from 'react';
const DataContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
const DataProviderSchedule = ({ children }) => {
    const [schedule,setSchedule]=useState([]);
    const [notes,setNote]=useState([]);
    const getNote = ()=>{
        AsyncStorage.getItem("notes").then(value =>{
            if(value!=null)
            {
                const tmp = JSON.parse(value);
                setNote(tmp);
            }
        })
    }
    const addNote = async (newData)=>{
        //console.log(newData);
        try {
            const dt=notes;
            dt.push(newData);
            await AsyncStorage.setItem("notes",JSON.stringify(dt));
            getNote();
        } catch (error) {
            console.log("Lỗi rồi");
        }   
    }
    const updateNote = async (newData)=>{
        const dt=notes;
        const id = dt.findIndex(a=> a.id===newData.id);
        try {
            dt[id]=newData;
            await AsyncStorage.setItem("notes",JSON.stringify(dt));
            getNote();
        } catch (error) {
            console.log("lỗi");
        } 
    }
    const deleteNote = async (deleteData) =>{
        const id = notes.findIndex(it=>it.id===deleteData.id);
        console.log("Phần tử đã xóa "+ id);
        notes.splice(id,1);
        await AsyncStorage.setItem("notes",JSON.stringify(notes));
        getNote();
    }
    const getSchedule = ()=>{
        AsyncStorage.getItem("schedule").then(value =>{
            if(value!=null)
            {
                const tmp = JSON.parse(value);
                setSchedule(tmp);
            }
        })
    }
    const addSchedule = async (newData)=>{
        try {
            const tmp = schedule;
            tmp.push(newData);
            await AsyncStorage.setItem("schedule",JSON.stringify(tmp));
            getSchedule();
        } catch (error) {
            console.log("Lỗi rồi");
            console.log(error);
        }
    }
    const deleteSchedule = async (deleteData) =>{
        const id = schedule.findIndex(it=>it.id===deleteData.id);
        console.log("Phần tử đã xóa"+ id);
        schedule.splice(id,1);
        await AsyncStorage.setItem("schedule",JSON.stringify(schedule));
        getSchedule();
    }
    const updateSchedule = async (newData) =>{
        console.log(newData);
        try {
            const dt= schedule;
            const id = dt.findIndex(a=>a.id===newData.id);
            dt[id]=newData;
            await AsyncStorage.setItem("schedule",JSON.stringify(dt));
        getSchedule();
        } catch (error) {
            console.log("Lỗi")
        }
    }
    useEffect(()=>{
        const getSchedule = ()=>{
            AsyncStorage.getItem("schedule").then(value =>{
                if(value!=null)
                {
                    const tmp = JSON.parse(value);
                    setSchedule(tmp);
                }
            })
        }
        getSchedule();
        getNote();
    },[])
    return (
        <DataContext.Provider value={{ schedule,notes,addSchedule,deleteSchedule,updateSchedule,addNote,updateNote,deleteNote}}>
            {children}
        </DataContext.Provider>
    );
};


const useDataSchedule = () => {
    return useContext(DataContext);
};

export { DataProviderSchedule, useDataSchedule };
