import React, {
  useState,
  ReactText,
  useCallback,
  useRef,
  useEffect,
  useContext,
} from 'react';
import {Picker} from '@react-native-community/picker';
import {Container, IContainerProps} from './styles';
import FormContext from '../../contexts/FormContext';

export interface IPropsOption {
  label: string;
  value: number;
}

export interface IPropsDropdown extends IContainerProps {
  options?: IPropsOption[];
  color?: string;
  name: string;
}

export interface IPickerRef extends Picker {
  value: string | number;
}

const Dropdown: React.FC<IPropsDropdown> = ({
  options = [],
  color = '#c8c8c9',
  name,
  ...rest
}) => {
  const {registerField} = useContext(FormContext);
  const [selectInput, setSelectInput] = useState<ReactText>('');
  const [colorSelect, setColorSelect] = useState('#c8c8c9');
  const pickerRef = useRef<IPickerRef>(null);

  const handleChangePicker = useCallback(
    (itemValue: React.ReactText) => {
      if (itemValue === 0) setColorSelect('#c8c8c9');
      else setColorSelect(color);
      if (!pickerRef.current) return;
      pickerRef.current.value = itemValue;
      setSelectInput(itemValue);
    },
    [color],
  );

  useEffect(() => {
    console.log('executou o use Effec');
    if (pickerRef.current) {
      if (!registerField) return;
      registerField({
        name,
        ref: pickerRef.current,
      });
    }
  }, [registerField, name]);

  return (
    <Container {...rest}>
      {console.log('renderizou DropDown')}
      <Picker
        selectedValue={selectInput}
        onValueChange={handleChangePicker}
        style={{color: colorSelect}}
        ref={pickerRef}>
        {options.map((option) => (
          <Picker.Item
            key={option.label}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </Container>
  );
};

export default Dropdown;
