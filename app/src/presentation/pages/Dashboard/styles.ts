import styled from 'styled-components/native';
import SafeAreaViewComponent from 'react-native-safe-area-view';
import {RectButton} from 'react-native-gesture-handler';

import BackgroundImgSvg from '../../assets/background_img.svg';

export const BackgroundColorStatusbar = '#3e4da3';

export const SafeAreaView = styled(SafeAreaViewComponent)`
  flex: 1;
  background-color: #3e4da3;
`;

export const Container = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #3e4da3;
`;

export const GroupLogo = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Logo = styled.Text`
  text-align: left;
  font-size: 72px;
  font-family: 'Lato-Black';
  margin-bottom: 10px;
  margin-top: 100px;
  color: #eaeaea;
`;

export const Description = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 18px;
  margin-left: 5px;
  color: #eaeaea;
  text-align: left;
`;

export const GroupButtons = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95px;
  margin-top: 200px;
`;

export const ButtonStyle = styled(RectButton)`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonEstudar = styled(ButtonStyle)`
  background-color: #d19a21;
`;

export const ButtonDarAulas = styled(ButtonStyle)`
  background-color: #27b990;
`;

export const ButtonsTitle = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 22px;
  margin-left: 10px;
  color: #eaeaea;
`;

export const BackgroundImg = styled(BackgroundImgSvg)`
  position: absolute;
  max-width: 800px;
  max-height: 550px;
  top: 15px;
  width: 100%;
  height: 100%;
`;
