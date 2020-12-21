import styled, {css} from 'styled-components/native';

interface IPropsContainer {
  backgroudColor: string;
  paddingBottom?: number;
}

export const Container = styled.View<IPropsContainer>`
  width: 100%;
  background-color: #d19a21;
  padding: 0 5% 80px;

  ${(props) =>
    props.backgroudColor &&
    css`
      background-color: ${props.backgroudColor};
    `}

  ${(props) =>
    props.paddingBottom &&
    css`
      padding-bottom: ${props.paddingBottom}px;
    `}
`;

export const NavigationTopGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationTopTitle = styled.Text`
  font-family: 'Lato-Black';
  font-size: 18px;
  color: #eaeaea;
`;

export const Title = styled.Text`
  font-family: 'Lato-Bold';
  font-size: 24px;
  max-width: 240px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #eaeaea;
`;
