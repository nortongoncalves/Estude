import styled from 'styled-components/native';
import {SafeAreaView as SafeAreaViewComponent} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const BackgroundColorStatusbar = '#27B990';

export const SafeAreaView = styled(SafeAreaViewComponent)`
  flex: 1;
  background-color: ${BackgroundColorStatusbar};
  padding-top: 20px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const ButtonGoBack = styled(RectButton)`
  background-color: ${BackgroundColorStatusbar};
  width: 100%;
  height: 90px;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonGoBackText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'Lato-Bold';
  margin-left: 30px;
`;

export const ButtonGoBackGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Content = styled.View`
  margin: 20px 5%;
`;

export const Title = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 30px;
  color: ${BackgroundColorStatusbar};
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 16px;
  color: #505050;
`;

export const SeparatorForm = styled.View`
  width: 100%;
  border-style: solid;
  border-color: #bababa;
  border-bottom-width: 1px;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 30px;
  padding-bottom: 10px;
`;

export const SeparatorTitle = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 20px;
  color: #979797;
  margin-left: 7px;
`;
