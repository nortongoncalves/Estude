import styled, {css} from 'styled-components/native';
import {
  SafeAreaView as SafeAreaViewComponent,
  TouchableOpacity,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

interface IContainerTermsProps {
  backgroundColor?: string;
}

interface ITextTermsProps {
  color?: string;
}

interface IBlockTermsProps {
  backgroundColor?: string;
  borderColor?: string;
}

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

export const ContainerTerms = styled(TouchableOpacity)<IContainerTermsProps>`
  display: flex;
  flex-direction: row;
  padding: 30px 7%;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

export const TextTerms = styled.Text<ITextTermsProps>`
  font-size: 14px;
  font-family: 'Lato-Regular';
  margin-right: 50px;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const BoldTextTerms = styled.Text`
  font-family: 'Lato-Bold';
`;

export const BlockTerms = styled.View<IBlockTermsProps>`
  width: 26px;
  height: 26px;
  border: 2px solid #fc0606;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.borderColor &&
    css`
      border-color: ${props.borderColor};
    `}
`;

export const ContainerButton = styled.View`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  padding: 0 5%;
`;

export const ButtonSubmit = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  border-style: solid;
  border-color: #3e4da3;
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;

export const TextButtonSubmit = styled.Text`
  font-size: 22px;
  color: #3e4da3;
  font-family: 'Lato-Bold';
`;
