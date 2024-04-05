import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { DataProvider } from '../../DataContext';

// Screens
import Home from '../Screens/Expense/Home_Screen/Home';
import Transaction from '../Screens/Expense/Transaction_Screen/Transaction';
import FinancialReport from '../Screens/Expense/Transaction_Screen/FinancialReport';
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
import DetailBudget from '../Screens/Expense/Budget_Screen/DetailBudget';
import DetailTransaction from '../Screens/Expense/Transaction_Screen/DetailTransaction';
//schedule
import TabarSchedule from './TabarSchedule';
import HomeSchedule from '../Screens/Schedule/Home_Screens/HomeSchedule';
import AddSchedule from '../Screens/Schedule/Home_Screens/AddSchedule';
import EditSchedule from '../Screens/Schedule/Home_Screens/EditSchedule';
import DetailSchedule from '../Screens/Schedule/Home_Screens/DetailSchedule';
import AddNote from '../Screens/Schedule/Note_Screens/AddNote';
import DetailNote from '../Screens/Schedule/Note_Screens/DetailNote';
import EditNote from '../Screens/Schedule/Note_Screens/EditNote';
//Health
import TabarHealth from './TabarHealth';
import ExcersiseItem from '../Screens/Health/Excersise_Screen/ExcersiseItem';
import PlanList from '../Screens/Health/Plan_Screen/PlanList';
import CreatePlan from '../Screens/Health/Plan_Screen/CreatePlan';
import EditPlan from '../Screens/Health/Plan_Screen/EditPlan';
// data
import { DataProviderSchedule } from '../Context/ScheduleContext';
const Stack= createStackNavigator();
const Drawer= createDrawerNavigator();

function App(props) {
    return ( 
        <DataProvider>
            <DataProviderSchedule>
                <NavigationContainer  screenOptions={{     
                    headerShown: false}}>
                    <Drawer.Navigator
                        drawerContent={props=><DrawerDesign {...props}/>}
                    >
                        {/* Expense */}
                        <Drawer.Screen name='Home' component={Tabar} options={{headerShown:false}}/>
                        <Drawer.Screen name='Income' component={Income} options={{headerShown:false}}/>
                        <Drawer.Screen name='Expense' component={Expense} options={{headerShown:false}}/>
                        <Drawer.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
                        <Drawer.Screen name='Budget' component={Budget} options={{headerShown:false}}/>
                        <Drawer.Screen name='CreateBudget' component={CreateBudget} options={{headerShown:false}}/>
                        <Drawer.Screen name='DetailBudget' component={DetailBudget} options={{headerShown:false}}/>
                        <Drawer.Screen name='Transaction' component={Transaction} options={{headerShown:false}}/>
                        <Drawer.Screen name='FinancialReport' component={FinancialReport} options={{headerShown:false}}/>
                        <Drawer.Screen name='DetailTransaction' component={DetailTransaction} options={{headerShown:false}}/>
                        {/* Schedule */}
                        <Drawer.Screen name='Schedule' component={TabarSchedule} options={{headerShown:false}}/>
                        <Drawer.Screen name='AddSchedule' component={AddSchedule} options={{headerShown:false}}/>
                        <Drawer.Screen name='EditSchedule' component={EditSchedule} options={{headerShown:false}}/>
                        <Drawer.Screen name='DetailSchedule' component={DetailSchedule} options={{headerShown:false}}/>
                        <Drawer.Screen name='AddNote' component={AddNote} options={{headerShown:false}}/>
                        <Drawer.Screen name='DetailNote' component={DetailNote} options={{headerShown:false}}/>
                        <Drawer.Screen name='EditNote' component={EditNote} options={{headerShown:false}}/>
                        {/* Health */}
                        <Drawer.Screen name='Health' component={TabarHealth} options={{headerShown:false}}/>
                        <Drawer.Screen name='ExcersiseItem' component={ExcersiseItem} options={{headerShown:false}}/>
                        <Drawer.Screen name='PlanList' component={PlanList} options={{headerShown:false}}/>
                        <Drawer.Screen name='CreatePlan' component={CreatePlan} options={{headerShown:false}}/>
                        <Drawer.Screen name='EditPlan' component={EditPlan} options={{headerShown:false}}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </DataProviderSchedule>
        </DataProvider>
    );
}

export default App;