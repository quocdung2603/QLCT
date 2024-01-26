import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//navigation 
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//screens
import Home from './Screens/Home'
import Texts from './Screens/Expense';

export type RootStackParamList = {
  Home: undefined;
  Texts: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            title:'Trending'
          }} />
        <Stack.Screen 
          name='Texts' 
          component={Texts}
          options={{
            title:'ABCD'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
