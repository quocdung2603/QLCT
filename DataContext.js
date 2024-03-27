// DataContext.js
import { createContext, useContext, useEffect, useState } from 'react';
const DataContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
const DataProvider = ({ children }) => {
    const [accountBalance, setAccountBalance] = useState(0);
    const [collect,setCollect]=useState([]);
    const [strCollect,setSubtractCollect]=useState([]);
    const [hTransaction,setHtransaction]=useState([]);
    const [budget,setBudget]=useState([]);
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
            const sortedTransactions = dt.sort((a, b) => a.date - b.date);
            setHtransaction(sortedTransactions);
          }
          else
          setHtransaction([]);
        })
    }

    const deletehTransaction = async (dataDelete) =>{
      //console.log(dataDelete.money);
      //hTransaction.remove(dataDelete);
      //console.log(hTransaction.length);
      const timeNow =dataDelete.date;

      const id = hTransaction.findIndex(item => item.date === dataDelete.date);
      console.log(id);
      hTransaction.splice(id,1);
      await AsyncStorage.setItem("hTransaction",JSON.stringify(hTransaction));
      gethTransaction();
    }
    //Collect
    const addCollect = async (newData) =>{
      try {   
        const bd=newData.budget;
        const id=budget.findIndex((item)=>item.nameBudget===bd);
        if(id!=-1)
        {
            budget[id].remaining=parseInt(budget[id].remaining)+parseInt(newData.money);
        }  

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
        await AsyncStorage.setItem("budget",JSON.stringify(budget));
        gethTransaction();
      } catch (error) {
        console.log(error);
      }
    }

    const subtractCollect = async (newData) =>{
      try {

        const bd=newData.budget;
        const id=budget.findIndex((item)=>item.nameBudget===bd);
        if(id!=-1)
        {
            budget[id].remaining=parseInt(budget[id].remaining)-parseInt(newData.money);
        }  

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
         await AsyncStorage.setItem("budget",JSON.stringify(budget));
         gethTransaction();
         getBudget();
      } catch (error) {
        console.log(error);
      }
    }

    //Budget
    const addBudget = async (newData)=>{
      try {
        const tmp = budget;
        tmp.push(newData);
        setBudget(tmp);
        console.log(budget);

        //save data
        await AsyncStorage.setItem("budget", JSON.stringify(tmp));
      } catch (error) {
        console.log("Lỗi thêm dữ liệu");
      }
    }
    const getBudget = () => {
      AsyncStorage.getItem("budget")
        .then(value =>{
            if(value!=null)
            {
              const tmp = JSON.parse(value);
              const dt = [];
              tmp.map((item) => {
                let t = item;
                t.date = new Date(item.time);
                dt.push(t);
              })
              const sortedTransactions = dt.sort((a, b) => a.time - b.time);
              setBudget(sortedTransactions);
            }
            else
            setBudget([]);
        })
  }
    const deleteBudget= async(dataDelete)=>{
      const id = budget.findIndex(item => item.time === dataDelete.time);
      console.log(id);
      budget.splice(id,1);
      await AsyncStorage.setItem("budget",JSON.stringify(budget));
      //gethTransaction();
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
      const getBudget = () => {
          AsyncStorage.getItem("budget")
            .then(value =>{
                if(value!=null)
                {
                  const tmp = JSON.parse(value);
                  const dt = [];
                  tmp.map((item) => {
                    let t = item;
                    t.date = new Date(item.time);
                    dt.push(t);
                  })
                  const sortedTransactions = dt.sort((a, b) => b.time - a.time);
                  setBudget(sortedTransactions);
                }
                else
                setBudget([]);
            })
      }

      getStrCollect();
      gethTransaction();
      getCollect();
      getAccountBalance();
      getBudget();
    },[])
  useEffect(() => {
    const getBudget = () => {
      AsyncStorage.getItem("budget")
            .then(value =>{
                if(value!=null)
                {
                  const tmp = JSON.parse(value);
                  const dt = [];
                  tmp.map((item) => {
                    let t = item;
                    t.date = new Date(item.time);
                    dt.push(t);
                  })
                  const sortedTransactions = dt.sort((a, b) => b.time - a.time);
                  setBudget(sortedTransactions);
                }
                else
                setBudget([]);
            })
    }
    getBudget();
    },[budget])

  return (
    <DataContext.Provider value={{ accountBalance,collect,hTransaction,budget, 
          updateAccountBalanece,
          addCollect,
          subtractCollect,
          srtUpdateAccountBalanece,
          addBudget,
          deletehTransaction,
          getBudget,
          deleteBudget,
     }}>
        {children}
    </DataContext.Provider>
  );
};


const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
