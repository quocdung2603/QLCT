import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
<<<<<<< HEAD:scr/Index.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import Home from './Screens/Home_Screen/Home';
import Transaction from './Screens/Transaction_Screen/Transaction';
import Budget from './Screens/Budget_Screen/Budget';
import Setting from './Screens/Setting_Screen/Setting';
import { AddButton } from './Components/AddButton';
import Income from './Screens/Home_Screen/Income';
=======
import 'react-native-gesture-handler';
// Screens
import Home from '../Screens/Home';
import Transaction from '../Screens/Transaction';
import Budget from '../Screens/Budget';
import Setting from '../Screens/Setting';



import { AddButton } from '../Components/AddButton';
>>>>>>> f650c1f8985c896c2aa2b69f22fdfe08244efd29:scr/Navigation/Tabar.js
//Screen names
const homeName = "Home";
const transactionName = "Transaction";
const budgetName="Budget";
const otherscreenName="Add";
const settingName = "Setting";
const incomeName = "Income";

const Tab = createBottomTabNavigator();
<<<<<<< HEAD:scr/Index.js
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
=======
function Tabar() {
>>>>>>> f650c1f8985c896c2aa2b69f22fdfe08244efd29:scr/Navigation/Tabar.js
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
                <Tab.Screen name={transactionName} component={Transaction} options={{ headerShown: false }} />
                <Tab.Screen name={otherscreenName} component={StackNavigator} options={{ headerShown: false }} />
                <Tab.Screen name={budgetName} component={Budget} options={{ headerShown: false }} />
                <Tab.Screen name={settingName} component={Setting} options={{ headerShown: false }} />
            </Tab.Navigator>
    );
}

<<<<<<< HEAD:scr/Index.js
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={incomeName} component={Income} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AppNavigation;
=======
export default Tabar;
>>>>>>> f650c1f8985c896c2aa2b69f22fdfe08244efd29:scr/Navigation/Tabar.js
