// DataContext.js
import { createContext, useContext, useEffect, useState } from 'react';
const DataContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
const DataProvider = ({ children }) => {
    const [accountBalance, setAccountBalance] = useState(0);
    const [collect,setCollect]=useState([]);
    const [strCollect,setSubtractCollect]=useState([]);
    const [hTransaction,setHtransaction]=useState([]);
    //AccountBalanece
    const updateAccountBalanece = async (newData) => {
      const tmp =parseInt(newData)+parseInt(accountBalance);
      setAccountBalance(tmp);
      await AsyncStorage.setItem("accountBalance",tmp.toString());
    };
    const srtUpdateAccountBalanece = async (newData) => {
      const tmp =parseInt(accountBalance)- parseInt(newData);
      setAccountBalance(tmp);
      await AsyncStorage.setItem("accountBalance",tmp.toString());
    };

    //Collect
    const addCollect = async (newData) =>{
      try {     
        //collect
        const tmp = collect;
        tmp.push(newData);
        setCollect(tmp); 

        //transaction
        const tmp1= hTransaction;
        newData.typeTransaction="add";
        newData.date= new Date(newData.date);
        const t= new Date();
        
        tmp1.push(newData);

        tmp1.sort((a,b)=>b.date-a.date);
        setHtransaction(tmp1);

        //save data
        await AsyncStorage.setItem("collect",JSON.stringify(tmp));
        await AsyncStorage.setItem("hTransaction",JSON.stringify(tmp1));
      } catch (error) {
        console.log(error);
      }
    }

    const subtractCollect = async (newData) =>{
      try {
         //subtract
         const tmp = strCollect;
         tmp.push(newData);
         setSubtractCollect(tmp); 
         //transaction
         const tmp1= hTransaction;
        newData.typeTransaction="str";
        newData.date= new Date(newData.date);
        tmp1.push(newData);

        tmp1.sort((a,b)=>b.date-a.date);
        setHtransaction(tmp1);
 
         //save data
         await AsyncStorage.setItem("strCollect",JSON.stringify(tmp));
         await AsyncStorage.setItem("hTransaction",JSON.stringify(tmp1));
      } catch (error) {
        console.log(error);
      }
    }




    //GetAlldata
    useEffect(()=>{
      const getAccountBalance=()=>{
        AsyncStorage.getItem("accountBalance")
          .then(value =>{
            if(value!=null)
            setAccountBalance( parseInt(value));
            else
            setAccountBalance(0);
          })
      }
      const getCollect=()=>{
        AsyncStorage.getItem("collect")
          .then(value =>{
            if(value!=null)
            setCollect(JSON.parse(value));
            else
            setCollect([]);
          })
      }
      const getStrCollect=()=>{
        AsyncStorage.getItem("strCollect")
          .then(value =>{
            if(value!=null)
            setSubtractCollect(JSON.parse(value));
            else
            setSubtractCollect([]);
          })
      }
      const gethTransaction = ()=>{
        AsyncStorage.getItem("hTransaction")
          .then(value=>{
            if(value!=null)
            {
              const tmp=JSON.parse(value);
              const dt=[];
              tmp.map((item)=>{
                let t=item;
                t.date=new Date(item.date);
                dt.push(t);
              })
              const sortedTransactions = dt.sort((a, b) => b.date - a.date);
              setHtransaction(sortedTransactions);

            }
            else
            setHtransaction([]);
          })
      }
      getStrCollect();
      gethTransaction();
      getCollect();
      getAccountBalance();
    },[])
  return (
    <DataContext.Provider value={{ accountBalance,collect,hTransaction, updateAccountBalanece,addCollect,subtractCollect,srtUpdateAccountBalanece }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
