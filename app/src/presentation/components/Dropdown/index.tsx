import React, {useState, ReactText, useCallback} from 'react';
import {Picker} from '@react-native-community/picker';
import {Container, IContainerProps} from './styles';

export interface IPropsOption {
  label: string;
  value: number;
}

export interface IPropsDropdown extends IContainerProps {
  options: IPropsOption[];
  color?: string;
}

const Dropdown: React.FC<IPropsDropdown> = ({
  options,
  color = '#c8c8c9',
  ...rest
}) => {
  const [selectInput, setSelectInput] = useState<ReactText>('');
  const [colorSelect, setColorSelect] = useState('#c8c8c9');

  const handleChangePicker = useCallback(
    (itemValue: React.ReactText) => {
      if (itemValue === '0') setColorSelect('#c8c8c9');
      else setColorSelect(color);
      setSelectInput(itemValue);
    },
    [color],
  );

  const createOptions = useCallback((optionArray: IPropsOption[]):
    | JSX.Element[]
    | '' => {
    if (!optionArray) return '';
    const Options = optionArray.map((option) => (
      <Picker.Item
        key={option.label}
        label={option.label}
        value={option.value}
      />
    ));

    return Options;
  }, []);

  return (
    <Container {...rest}>
      {console.log('renderizou DropDown')}
      <Picker
        selectedValue={selectInput}
        onValueChange={handleChangePicker}
        style={{color: colorSelect}}>
        {createOptions(options)}
      </Picker>
    </Container>
  );
};

export default Dropdown;
