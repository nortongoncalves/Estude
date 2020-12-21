import styled, {css} from 'styled-components/native';

interface ISelectGroupProps {
  width?: string;
}

export const Container = styled.View``;

export const FormGroup = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow: hidden;
`;

export const FormGroupInline = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const SelectGroup = styled.View<ISelectGroupProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

export const LabelSelect = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 12px;
  color: #eaeaea;
  margin-bottom: 10px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding-bottom: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #eaeaea;
`;

export const ButtonText = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #eaeaea;
`;
