import styled, {css} from 'styled-components/native';
import {TextInputProps} from 'react-native';

interface IInputProps extends TextInputProps {
  borderColor?: string;
  color?: string;
}

export const Container = styled.TextInput<IInputProps>`
  width: 100%;
  height: 50px;
  border: 2px solid #c8c8c9;
  border-radius: 5px;
  font-family: 'Lato-Regular';
  font-size: 16px;
  padding-left: 15px;
  color: #c8c8c9;
  margin-bottom: 15px;

  ${(props) =>
    props.borderColor &&
    css`
      border-color: ${props.borderColor};
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
