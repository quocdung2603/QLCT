// DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [accountBalance, setAccountBalance] = useState(0);
    const [collect,setCollect]=useState([]);
    //const [add]
  const updateAccountBalanece = (newData) => {
    setAccountBalance(newData);
  };
  const addCollect = (newData) =>{
    const tmp = collect;
    tmp.push(newData);
    setCollect(tmp);
  }

  return (
    <DataContext.Provider value={{ accountBalance,collect, updateAccountBalanece,addCollect }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
