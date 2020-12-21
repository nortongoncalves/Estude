import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Dashboard from '../presentation/pages/Dashboard';
import GiveClasses from '../presentation/pages/GiveClasses';
import StudyTabs from './StudyTabs';

const {Navigator, Screen} = createStackNavigator();

const AppStack: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Dashboard" component={Dashboard} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default AppStack;
