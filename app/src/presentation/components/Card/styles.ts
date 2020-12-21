import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';

interface ILikeButtonProps extends RectButtonProperties {
  backgroundColor?: string;
}

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8%;
  margin: 5%;
  border-radius: 5px;
  background-color: white;
`;

export const ContainerTop = styled.View`
  padding: 0 5%;
  margin-bottom: 50px;
`;

export const GroupTop = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const GroupAvatarAndDataTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  background-color: #959595;
  margin-right: 15px;
`;

export const GroupDataTop = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 20px;
  color: #32264d;
  margin-bottom: 10px;
`;

export const Subject = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 12px;
  color: #6a6180;
`;

export const Description = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 14px;
  color: #6a6180;
  text-align: justify;
  line-height: 20px;
`;

export const GroupBottom = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-style: solid;
  border-color: #e6e6f0;
  background-color: #fafafc;
  padding-bottom: 8%;
`;

export const GroupPriceHour = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PriceHourLabel = styled.Text`
  font-family: 'Lato-Regular';
  color: #6a6180;
  font-size: 14px;
  margin-right: 20px;
`;

export const PriceHourText = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 16px;
  color: #d19a21;
`;

export const GroupButtons = styled.View`
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const LikeButton = styled(RectButton)<ILikeButtonProps>`
  width: 56px;
  height: 56px;
  background-color: #959595;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

export const WhatsappButton = styled(RectButton)`
  width: 229px;
  height: 56px;
  background-color: #04d361;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const WhatsappButtonText = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: white;
  margin-left: 15px;
`;
