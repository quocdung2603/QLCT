import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// Screens
import Home from '../Screens/Home';
import Transaction from '../Screens/Transaction';
import Budget from '../Screens/Budget';
import Setting from '../Screens/Setting';
import test from '../Screens/Test';
import Tabar from "./Tabar";
import Expense from '../Screens/Expense';

const Stack= createStackNavigator();

function App(props) {
    return ( 
        <NavigationContainer  initialRouteName="TabBar" screenOptions={{
            headerShown: false}}>
            <Stack.Navigator>
                <Stack.Screen name="Tabar" component={Tabar}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Transaction" component={Transaction}/>
                <Stack.Screen name="Budget" component={Budget}/>
                <Stack.Screen name="Setting" component={Setting}/>
                <Stack.Screen name="test" component={test}/>
                <Stack.Screen name="Expense" component={Expense}/>
            </Stack.Navigator>
        </NavigationContainer>
     );
}

export default App;