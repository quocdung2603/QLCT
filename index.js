/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigation from './scr/Index';
import Budget from './scr/Screens/Budget_Screen/Budget';
import Setting from './scr/Screens/Setting_Screen/Setting';
AppRegistry.registerComponent(appName, () => AppNavigation);
