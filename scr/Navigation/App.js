import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import Home from '../Screens/Expense/Home_Screen/Home';
import Transaction from '../Screens/Expense/Transaction_Screen/Transaction';
import Budget from '../Screens/Expense/Budget_Screen/Budget';
import Setting from '../Screens/Expense/Setting_Screen/Setting';
import Tabar from "./Tabar";
import Expense from '../Screens/Expense/Home_Screen/Expense';
import Income from '../Screens/Expense/Home_Screen/Income';
import Notification from '../Screens/Expense/Home_Screen/Notification';
import CreateBudget from '../Screens/Expense/Budget_Screen/CreateBudget';
import test from '../Screens/Test';
import Header from '../Components/Header';
import DrawerDesign from '../Components/Drawer';

//schedule
import TabarSchedule from './TabarSchedule';
import HomeSchedule from '../Screens/Schedule/Home_Screens/HomeSchedule';
import AddSchedule from '../Screens/Schedule/Home_Screens/AddSchedule';

import DetailBudget from '../Screens/Expense/Budget_Screen/DetailBudget';
const Stack= createStackNavigator();
const Drawer= createDrawerNavigator();

function App(props) {
    return ( 
        <NavigationContainer  screenOptions={{     
            headerShown: false}}>
            <Drawer.Navigator
                drawerContent={props=><DrawerDesign {...props}/>}
            >
                <Drawer.Screen name='Home' component={Tabar} options={{headerShown:false}}/>
                <Drawer.Screen name='Schedule' component={TabarSchedule} options={{headerShown:false}}/>
                <Drawer.Screen name='Income' component={Income} options={{headerShown:false}}/>
                <Drawer.Screen name='Expense' component={Expense} options={{headerShown:false}}/>
                <Drawer.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
                <Drawer.Screen name='CreateBudget' component={CreateBudget} options={{headerShown:false}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;