import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import TeacherList from '../../presentation/pages/TeacherList';
import Favorites from '../../presentation/pages/Favorites';

import {tabBarOptionsStyles} from './styles';

const {Navigator, Screen} = createBottomTabNavigator();

interface IPropsIcon {
  focused: boolean;
  size: number;
  color: string;
  name: string;
}

interface IPropsLabel {
  focused: boolean;
  color: string;
}

const StudyTabs: React.FC = () => {
  const setColorTabBarLabel = useCallback(
    ({focused, color}: IPropsLabel) => (
      <Text
        style={{
          color: focused ? color : '#bebebe',
        }}>
        Professores(as)
      </Text>
    ),
    [],
  );

  const setIconTabBarIcon = useCallback(
    ({focused, size, color, name}: IPropsIcon) => (
      <Icon name={name} size={size} color={focused ? color : '#bebebe'} />
    ),
    [],
  );

  return (
    <Navigator tabBarOptions={tabBarOptionsStyles}>
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: ({focused}) =>
            setColorTabBarLabel({focused, color: '#d19a21'}),
          tabBarIcon: ({focused, size}) =>
            setIconTabBarIcon({
              focused,
              size,
              color: '#d19a21',
              name: 'chalkboard-teacher',
            }),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: ({focused}) =>
            setColorTabBarLabel({focused, color: '#E33D3D'}),
          tabBarIcon: ({focused, size}) =>
            setIconTabBarIcon({focused, size, color: '#E33D3D', name: 'heart'}),
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
