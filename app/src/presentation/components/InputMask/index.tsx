import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useContext,
  useEffect,
  memo,
} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import FormContext from '../../contexts/FormContext';

import hourMask from './utils/hourMask';
import linkMask from './utils/linkMask';
import moneyMask from './utils/moneyMask';
import phoneMask from './utils/phoneMask';
import {Container} from './styles';

type IMask = 'money' | 'phone' | 'hour' | 'link';
interface IPropsInput extends TextInputProps {
  mask: IMask;
  color?: string;
  borderColorFocus?: string;
  name: string;
}

export interface IInputMaskHandles {
  focus: () => void;
}

interface ITextInputRef extends TextInput {
  value: string;
}

const InputMask: React.ForwardRefRenderFunction<
  IInputMaskHandles,
  IPropsInput
> = ({name, mask, color, borderColorFocus = '#c8c8c9', ...rest}, ref) => {
  const {registerField} = useContext(FormContext);
  const [borderColor, setBorderColor] = useState('');
  const [valueInput, setValueInput] = useState('');
  const inputRef = useRef<ITextInputRef>(null);
  const maskMethods = {
    money: {
      method: moneyMask,
      defaultValue: 'R$ 0,00',
    },
    link: {
      method: linkMask,
      defaultValue: 'https://www.',
    },
    phone: {
      method: phoneMask,
      defaultValue: '',
    },
    hour: {
      method: hourMask,
      defaultValue: '',
    },
  };

  const handleFocus = useCallback(
    (valueInput, colorBorder: string, defaultValue) => {
      setBorderColor(colorBorder);
      if (valueInput.length > 0) return;
      setValueInput(defaultValue);
    },
    [],
  );

  const handleBlur = useCallback(() => {
    setBorderColor('#c8c8c9');
  }, []);

  const handleChangeText = useCallback((textInput: string, maskMethod) => {
    let parsedTextInput = '';
    if (maskMethod) {
      parsedTextInput = maskMethod(textInput);
    }
    if (!inputRef.current) return;
    inputRef.current.value = parsedTextInput;
    setValueInput(parsedTextInput);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  useEffect(() => {
    if (inputRef.current) {
      if (!registerField) return;
      registerField({
        name,
        ref: inputRef.current,
      });
    }
  }, [name, registerField]);

  return (
    <Container
      ref={inputRef}
      onFocus={() => {
        handleFocus(
          valueInput,
          borderColorFocus,
          maskMethods[mask].defaultValue,
        );
      }}
      onBlur={handleBlur}
      value={valueInput}
      borderColor={borderColor}
      color={color}
      onChangeText={(textInput) => {
        handleChangeText(textInput, maskMethods[mask].method);
      }}
      placeholderTextColor="#c8c8c9"
      {...rest}
    />
  );
};

export default memo(forwardRef(InputMask));
