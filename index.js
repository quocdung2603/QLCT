/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './scr/Navigation/App';
import test from './scr/Screens/Test';
import AddNote from './scr/Screens/Schedule/Note_Screens/AddNote';

AppRegistry.registerComponent(appName, () => App);
