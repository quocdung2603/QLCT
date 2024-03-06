import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
// Screens
import Home from '../Screens/Expense/Home_Screen/Home';
import Transaction from '../Screens/Expense/Transaction_Screen/Transaction';
import Budget from '../Screens/Expense/Budget_Screen/Budget';
import Setting from '../Screens/Expense/Setting_Screen/Setting';



import { AddButton } from '../Components/AddButton';
import { Alert } from 'react-native';
import { useData } from '../../DataContext';
//Screen names
const homeName = "Home";
const transactionName = "Transaction";
const budgetName="Budget";
const otherscreenName="Add";
const settingName = "Setting";
const incomeName = "Income";

const Tab = createBottomTabNavigator();
function Tabar({route}) {
    const { hTransaction } =useData();
    return ( 
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === transactionName) {
                            iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
                        } else if (rn === budgetName){
                            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
                        } else if(rn === otherscreenName) {
                            return <AddButton />
                        } else if(rn === settingName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#7F3DFF',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}
            >
                <Tab.Screen name={homeName} component={Home} options={{ headerShown: false }} />
                <Tab.Screen name={transactionName} component={Transaction} options={{ headerShown: false }}/>
                <Tab.Screen name={otherscreenName} component={Home} options={{ headerShown: false }} />
                <Tab.Screen name={budgetName} component={Budget} options={{ headerShown: false }} />
                <Tab.Screen name={settingName} component={Setting} options={{ headerShown: false }} />
            </Tab.Navigator>
    );
}
export default Tabar;
