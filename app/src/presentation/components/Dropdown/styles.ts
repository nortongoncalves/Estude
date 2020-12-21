import styled, {css} from 'styled-components/native';

export interface IContainerProps {
  width?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  marginBottom?: string;
}

export const Container = styled.View<IContainerProps>`
  height: 50px;
  width: 100%;
  background-color: #fafafc;
  border-radius: 5px;
  padding-left: 8px;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `}

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `}
`;
