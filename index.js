/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './scr/Navigation/App';
import test from './scr/Screens/Test';
import EditNote from './scr/Screens/Schedule/Note_Screens/EditNote';
import DetailTransaction from './scr/Screens/Expense/Transaction_Screen/DetailTransaction';
import EditDetailTransaction from './scr/Screens/Expense/Transaction_Screen/EditDetailTransaction';
import Income from './scr/Screens/Expense/Home_Screen/Income';
AppRegistry.registerComponent(appName, () => App);
