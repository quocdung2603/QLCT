/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './scr/Navigation/App';
import test from './scr/Screens/Test';
import EditNote from './scr/Screens/Schedule/Note_Screens/EditNote';

AppRegistry.registerComponent(appName, () => App);
