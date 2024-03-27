import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
// Screens
import HomeSchedule from '../Screens/Schedule/Home_Screens/HomeSchedule';
import TakeNote from '../Screens/Schedule/Note_Screens/TakeNote';
import ClockHome from '../Screens/Schedule/Clock_Screens/ClockHome';


import { AddButton2 } from '../Components/AddButton2';
import { Alert } from 'react-native';
import test from '../Screens/Test';
import SettingSchedule from '../Screens/Schedule/Setting_Screens/SettingSchedule';
import { useDataSchedule } from '../Context/ScheduleContext';
import { useData } from '../../DataContext';

//Screen names
const homeName = "HomeSchedule";
const noteName="TakeNote";
const clockName = "ClockHome";
const settingName="SettingSchedule";
const otherscreenName = "AddButton";

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

                        } else if (rn === noteName) {
                            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
                        } 
                        else if (rn === clockName) {
                            iconName = focused ? 'time' : 'time-outline';
                        }
                        else if (rn === settingName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        else if(rn === otherscreenName) {
                            return <AddButton2/>
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
                <Tab.Screen name={clockName} component={ClockHome} options={{ headerShown: false }} />
                <Tab.Screen name={otherscreenName} component={HomeSchedule} options={{ headerShown: false }} />
                <Tab.Screen name={noteName} component={TakeNote} options={{ headerShown: false }} />
                <Tab.Screen name={settingName} component={SettingSchedule} options={{ headerShown: false }} />
            </Tab.Navigator>
    );
}
export default TabarSchedule;
