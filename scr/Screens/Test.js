import * as React from "react";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Expense/Home_Screen/Home";
import Budget from "./Expense/Budget_Screen/Budget";
const Drawer= createDrawerNavigator();
function test() {
    return ( 
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Budget" component={Budget}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default test;

