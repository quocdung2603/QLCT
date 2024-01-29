/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigation from './scr/Index';
import Budget from './scr/Screens/Budget';

AppRegistry.registerComponent(appName, () => AppNavigation);
