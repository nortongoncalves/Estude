import React, {useCallback, useRef, useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  InlineGroupInputs,
  ContainerInput,
  Button,
  TitleButton,
} from './styled';
import Dropdown, {IPropsOption} from '../Dropdown';
import InputMask, {IInputMaskHandles} from '../InputMask';

const ContainerCostHour: React.FC = () => {
  const [numberHours, setNumberHours] = useState(1);
  const [options] = useState<IPropsOption[]>([
    {
      label: 'Selecione o dia',
      value: 0,
    },
    {
      label: 'Segunda Feira',
      value: 2,
    },
    {
      label: 'Terça Feira',
      value: 3,
    },
    {
      label: 'Quarta Feira',
      value: 4,
    },
    {
      label: 'Quinta Feira',
      value: 5,
    },
    {
      label: 'Sexta Feira',
      value: 6,
    },
    {
      label: 'Sábado',
      value: 7,
    },
    {
      label: 'Domingo',
      value: 1,
    },
  ]);
  const endTimeInputRef = useRef<IInputMaskHandles>(null);

  const handlePressButton = useCallback(() => {
    setNumberHours((oldValue) => oldValue + 1);
  }, []);

  const renderHours = useCallback(
    (numberHours: number, options: IPropsOption[]) => {
      return Array.from({
        length: numberHours,
      }).map((_, index) => {
        const key = `${index}schedules`;
        return (
          <View key={key} style={{marginBottom: 30}}>
            <Dropdown
              name={`schedules[${index}].weekDay`}
              options={options}
              backgroundColor="#e5e5e5"
              border="2px solid #c8c8c9"
              marginBottom="15px"
              color="#1f9b78"
            />
            <InlineGroupInputs>
              <ContainerInput>
                <InputMask
                  name={`schedules[${index}].startTime`}
                  placeholder="Horário de início"
                  keyboardType="numeric"
                  onSubmitEditing={() => endTimeInputRef.current?.focus()}
                  mask="hour"
                  borderColorFocus="#1f9b78"
                  color="#1f9b78"
                  maxLength={5}
                />
              </ContainerInput>
              <ContainerInput>
                <InputMask
                  name={`schedules[${index}].endTime`}
                  placeholder="Horário de Fim"
                  returnKeyType="next"
                  keyboardType="numeric"
                  mask="hour"
                  ref={endTimeInputRef}
                  borderColorFocus="#1f9b78"
                  color="#1f9b78"
                  maxLength={5}
                />
              </ContainerInput>
            </InlineGroupInputs>
          </View>
        );
      });
    },
    [],
  );
  return (
    <Container>
      {renderHours(numberHours, options)}
      <Button onPress={handlePressButton}>
        <TitleButton>+ Novo Horário</TitleButton>
      </Button>
    </Container>
  );
};

export default ContainerCostHour;
