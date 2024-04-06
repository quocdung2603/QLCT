// DataContext.js
import { createContext, useContext, useEffect, useState } from 'react';
const DataContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
const DataProviderSchedule = ({ children }) => {
    const [schedule,setSchedule]=useState([]);
    const [notes,setNote]=useState([]);
    //Schedule start
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
    //Schedule end

    //Note start
    //Lấy note
    const getNote = ()=>{
        AsyncStorage.getItem("notes").then(value =>{
            if(value!=null)
            {
                const tmp = JSON.parse(value);
                const dt = tmp.filter(it => it.flag === true);
                const dt1 = tmp.filter(it => it.flag === false);
                dt1.sort((a, b) => b.id - a.id); // Sắp xếp mảng dt1
                const final = [...dt, ...dt1];
                setNote(final);
            }
        })
    }
    //Thêm note
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
    //Cập nhật note
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
    //Xóa note
    const deleteNote = async (deleteData) =>{
        const id = notes.findIndex(it=>it.id===deleteData.id);
        console.log("Phần tử đã xóa "+ id);
        notes.splice(id,1);
        await AsyncStorage.setItem("notes",JSON.stringify(notes));
        getNote();
    }
    //Đặt cờ cho note
    const choiceFlag = async (data)=>{
        const id = notes.findIndex(it=>it.id===data.id);
        if(notes[id].flag===true)
        {
            notes[id].flag=false;
        }
        else
        {
            notes[id].flag=true;
        }
        await AsyncStorage.setItem("notes",JSON.stringify(notes));
        getNote();
    }
    //note end

    //Load data
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
        <DataContext.Provider value={{ schedule,notes,addSchedule,deleteSchedule,updateSchedule,addNote,updateNote,deleteNote,choiceFlag}}>
            {children}
        </DataContext.Provider>
    );
};


const useDataSchedule = () => {
    return useContext(DataContext);
};

export { DataProviderSchedule, useDataSchedule };
