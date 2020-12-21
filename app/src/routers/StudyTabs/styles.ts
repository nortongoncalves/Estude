import {BottomTabBarOptions} from '@react-navigation/bottom-tabs';

export const tabBarOptionsStyles: BottomTabBarOptions = {
  style: {
    elevation: 0,
    shadowOpacity: 0,
    height: 80,
  },
  tabStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    flex: 0,
    width: 50,
    height: 30,
  },
  labelStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  inactiveBackgroundColor: '#fafafc',
  activeBackgroundColor: '#ebebf5',
};
