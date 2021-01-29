import React, {memo, useCallback, useRef, useState} from 'react';
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
import {weekDays} from '../../utils/weekDays';

const ContainerCostHour: React.FC = () => {
  const [numberHours, setNumberHours] = useState(1);
  const [options] = useState<IPropsOption[]>(weekDays);
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
              defaultLabel="Selecione o Dia"
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

export default memo(ContainerCostHour);
