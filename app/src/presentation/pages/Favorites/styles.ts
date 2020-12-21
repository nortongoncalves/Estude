import styled from 'styled-components/native';
import {SafeAreaView as SafeAreaViewComponent} from 'react-native';

export const BackgroundColorStatusbar = '#d19a21';

export const SafeAreaView = styled(SafeAreaViewComponent)`
  flex: 1;
  background-color: #d19a21;
  padding-top: 20px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const ContainerCard = styled.ScrollView`
  flex: 1;
  margin-top: -80px;
`;

