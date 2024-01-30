/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
<<<<<<< HEAD
import AppNavigation from './scr/Index';
import Budget from './scr/Screens/Budget_Screen/Budget';
import Setting from './scr/Screens/Setting_Screen/Setting';
AppRegistry.registerComponent(appName, () => AppNavigation);
=======

import App from './scr/Navigation/App';

AppRegistry.registerComponent(appName, () => App);
>>>>>>> f650c1f8985c896c2aa2b69f22fdfe08244efd29
