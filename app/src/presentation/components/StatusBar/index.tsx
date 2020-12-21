import React from 'react';
import {StatusBar as StatusBarComponent, StatusBarProps} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const StatusBar: React.FC<StatusBarProps> = ({...rest}) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBarComponent {...rest} /> : null;
};

export default StatusBar;
