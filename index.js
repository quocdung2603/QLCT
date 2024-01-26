/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './scr/App';
import {name as appName} from './app.json';
import Home from './scr/Screens/Home'
import Expense from './scr/Screens/Expense';
import Income from './scr/Screens/Income';

AppRegistry.registerComponent(appName, () => Income);
