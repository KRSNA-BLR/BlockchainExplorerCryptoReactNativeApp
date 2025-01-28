/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';           // <-- la ruta apunta al "App.tsx" de la raíz
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
