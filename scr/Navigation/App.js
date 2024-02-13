import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


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
const Stack= createStackNavigator();

function App(props) {
    return ( 
        <NavigationContainer  initialRouteName="TabBar" screenOptions={{
            headerShown: false}}>
            <Stack.Navigator>
                <Stack.Screen name="Tabar" component={Tabar} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Transaction" component={Transaction} options={{headerShown:false}}/>
                <Stack.Screen name="Budget" component={Budget} options={{headerShown:false}}/>
                <Stack.Screen name="Setting" component={Setting} options={{headerShown:false}}/>
                <Stack.Screen name="Expense" component={Expense} options={{headerShown:false}}/>
                <Stack.Screen name="Income" component={Income} options={{headerShown:false}}/>
                <Stack.Screen name="Notification" component={Notification} options={{headerShown:false}}/>
                <Stack.Screen name="CreateBudget" component={CreateBudget} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;