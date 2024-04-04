import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
// Screens
import HomeHealth from '../Screens/Health/Home_Screen/HomeHealth';
import CategoryMain from '../Screens/Health/Categories_Screen/CategoryMain';
import PlanMain from '../Screens/Health/Plan_Screen/PlanMain';
import SettingMain from '../Screens/Health/Setting_Screen/SettingMain';
import ExcersiseMain from '../Screens/Health/Excersise_Screen/ExcersiseMain';
//Screen names
const homeName = "HomeHealth";
const categoryName="CategoryMain";
const planName = "PlanMain";
const settingName="SettingMain";
const excersiseName="ExcersiseMain";

const Tab = createBottomTabNavigator();
function TabarHealth({route}) {
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

                        } else if (rn === categoryName) {
                            iconName = focused ? 'library' : 'library-outline';
                        } 
                        else if (rn === excersiseName) {
                            iconName = focused ? 'barbell' : 'barbell-outline';
                        }
                        else if (rn === planName) {
                            iconName = focused ? 'clipboard' : 'clipboard-outline';
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
                <Tab.Screen name={homeName} component={HomeHealth} options={{ headerShown: false }} />
                <Tab.Screen name={categoryName} component={CategoryMain} options={{ headerShown: false }} />
                <Tab.Screen name={excersiseName} component={ExcersiseMain} options={{ headerShown: false }} />
                <Tab.Screen name={planName} component={PlanMain} options={{ headerShown: false }} />
                
            </Tab.Navigator>
    );
}
export default TabarHealth;
