/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './scr/Navigation/App';
import test from './scr/Screens/Test';
import AddSchedule from './scr/Screens/Schedule/Home_Screens/AddSchedule';

AppRegistry.registerComponent(appName, () => App);
