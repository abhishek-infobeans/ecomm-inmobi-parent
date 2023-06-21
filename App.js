import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {Navigator} from './src/navigation/navigator';
LogBox.ignoreAllLogs();
export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigator />;
};
