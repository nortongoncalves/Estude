import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View``;

export const InlineGroupInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerInput = styled.View`
  width: 48%;
`;

export const Button = styled(TouchableOpacity)`
  align-self: flex-end;
`;

export const TitleButton = styled.Text`
  color: #7e7e7e;
  font-family: 'Lato-Bold';
  font-size: 18px;
`;
