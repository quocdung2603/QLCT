import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
// Screens
import HomeSchedule from './HomeSchedule';
import TestSchedule from './TestSchedule';



import { AddButton } from '../Components/AddButton';
import { Alert } from 'react-native';
import test from '../Test';
//Screen names
const homeName = "HomeSchedule";
const testSchedule="Test";

const Tab = createBottomTabNavigator();
function TabarSchedule({route}) {
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

                        } else if (rn === testSchedule) {
                            iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
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
                <Tab.Screen name={homeName} component={HomeSchedule} options={{ headerShown: false }} />
                <Tab.Screen name={testSchedule} component={TestSchedule} options={{ headerShown: false }} />
            </Tab.Navigator>
    );
}
export default TabarSchedule;
