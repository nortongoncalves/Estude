import React, {useCallback, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ViewAnimatedHeight, {
  IViewAnimatedHeightHandles,
} from '../../animations/ViewAnimatedHeight';
import Dropdown, {IPropsOption} from '../Dropdown';
import InputMask from '../InputMask';

import {
  Container,
  FormGroup,
  FormGroupInline,
  SelectGroup,
  LabelSelect,
  ButtonFilter,
  ButtonText,
} from './styles';

interface IRequest {
  optionsMatter: IPropsOption[];
  optionsWeek: IPropsOption[];
}

const Filter: React.FC<IRequest> = ({optionsMatter, optionsWeek}) => {
  const ViewAnimatedHeightRef = useRef<IViewAnimatedHeightHandles>(null);

  const handlePressButtonFilter = useCallback(() => {
    ViewAnimatedHeightRef.current?.visible
      ? ViewAnimatedHeightRef.current?.close()
      : ViewAnimatedHeightRef.current?.open();
  }, []);

  return (
    <Container>
      <ButtonFilter onPress={handlePressButtonFilter}>
        <Icon name="search" size={18} color="#eaeaea" />
        <ButtonText>Filtrar por dia, hora e matéria</ButtonText>
        <Icon
          name={
            ViewAnimatedHeightRef.current?.visible ? 'angle-up' : 'angle-down'
          }
          size={18}
          color="#eaeaea"
        />
      </ButtonFilter>

      <ViewAnimatedHeight ref={ViewAnimatedHeightRef}>
        <FormGroup>
          {optionsMatter && (
            <SelectGroup>
              <LabelSelect>Matéria</LabelSelect>
              <Dropdown
                defaultLabel="Selecione a Matéria"
                name="matter"
                options={optionsMatter}
                color="#d19a21"
              />
            </SelectGroup>
          )}
          <FormGroupInline>
            {optionsWeek && (
              <SelectGroup width="57%">
                <LabelSelect>Dia da semana</LabelSelect>
                <Dropdown
                  defaultLabel="Selecione o Dia"
                  name="weekDay"
                  options={optionsWeek}
                  color="#d19a21"
                />
              </SelectGroup>
            )}
            <SelectGroup width="40%">
              <LabelSelect>Horário</LabelSelect>
              <InputMask
                name="startTime"
                placeholder="Horário de início"
                style={{backgroundColor: '#fff'}}
                keyboardType="numeric"
                mask="hour"
                color="#d19a21"
                maxLength={5}
              />
            </SelectGroup>
          </FormGroupInline>
        </FormGroup>
      </ViewAnimatedHeight>
    </Container>
  );
};

export default Filter;
