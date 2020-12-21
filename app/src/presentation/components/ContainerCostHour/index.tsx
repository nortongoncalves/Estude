import React, {useRef} from 'react';

import {Container, InlineGroupInputs, ContainerInput} from './styled';
import Dropdown, {IPropsOption} from '../Dropdown';
import Input, {IInputHandles} from '../Input';

const ContainerCostHour: React.FC = () => {
  const options: IPropsOption[] = [
    {
      label: 'Selecione o dia',
      value: 0,
    },
    {
      label: 'Segunda Feira',
      value: 1,
    },
    {
      label: 'Terça Feira',
      value: 2,
    },
    {
      label: 'Quarta Feira',
      value: 3,
    },
    {
      label: 'Quinta Feira',
      value: 4,
    },
    {
      label: 'Sexta Feira',
      value: 5,
    },
    {
      label: 'Sábado',
      value: 6,
    },
    {
      label: 'Domingo',
      value: 7,
    },
  ];
  const initEndHourInputRef = useRef<IInputHandles>(null);

  return (
    <Container>
      <Dropdown
        options={options}
        backgroundColor="#e5e5e5"
        border="2px solid #c8c8c9"
        marginBottom="15px"
        color="#1f9b78"
      />
      <InlineGroupInputs>
        <ContainerInput>
          <Input
            placeholder="Horário de início"
            keyboardType="numeric"
            onSubmitEditing={() => initEndHourInputRef.current?.focus()}
            mask="hours"
            borderColorFocus="#1f9b78"
            color="#1f9b78"
            maxLength={5}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Horário de Fim"
            returnKeyType="next"
            keyboardType="numeric"
            mask="hours"
            ref={initEndHourInputRef}
            borderColorFocus="#1f9b78"
            color="#1f9b78"
            maxLength={5}
          />
        </ContainerInput>
      </InlineGroupInputs>
    </Container>
  );
};

export default ContainerCostHour;
