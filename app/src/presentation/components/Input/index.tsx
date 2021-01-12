import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
} from 'react';
import {TextInputProps, TextInput} from 'react-native';

import hourMask from './utils/hourMask';
import linkMask from './utils/linkMask';
import moneyMask from './utils/moneyMask';
import phoneMask from './utils/phoneMask';
import {Container} from './styles';
interface IPropsInput extends TextInputProps {
  mask?: 'money' | 'phone' | 'hours' | 'link' | null;
  color?: string;
  borderColorFocus?: string;
}

export interface IInputHandles {
  focus: () => void;
}

const Input: React.ForwardRefRenderFunction<IInputHandles, IPropsInput> = (
  {mask = null, color, borderColorFocus = '#c8c8c9', ...rest},
  ref,
) => {
  const [borderColor, setBorderColor] = useState('');
  const [valueInputMask, setValueInputMask] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleFocus = useCallback((colorBorder: string) => {
    setBorderColor(colorBorder);
  }, []);

  const handleFocusIfMask = useCallback(
    (valueInputMask, colorBorder: string, mask) => {
      setBorderColor(colorBorder);
      if (valueInputMask.length > 0) return;
      if (mask === 'money') setValueInputMask('R$ 0,00');
      if (mask === 'link') setValueInputMask('https://www.');
    },
    [],
  );

  const handleBlur = useCallback(() => {
    setBorderColor('#c8c8c9');
  }, []);

  const handleChangeText = useCallback((textInput: string, mask) => {
    let parsedTextInput = '';
    if (mask === 'hours') parsedTextInput = hourMask(textInput);
    if (mask === 'money') parsedTextInput = moneyMask(textInput);
    if (mask === 'phone') parsedTextInput = phoneMask(textInput);
    if (mask === 'link') parsedTextInput = linkMask(textInput);
    setValueInputMask(parsedTextInput);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  if (mask) {
    return (
      <Container
        ref={inputRef}
        onFocus={() => {
          handleFocusIfMask(valueInputMask, borderColorFocus, mask);
        }}
        onBlur={handleBlur}
        value={valueInputMask}
        borderColor={borderColor}
        color={color}
        onChangeText={(textInput) => handleChangeText(textInput, mask)}
        placeholderTextColor="#c8c8c9"
        {...rest}
      />
    );
  }
  return (
    <Container
      ref={inputRef}
      onFocus={() => handleFocus(borderColorFocus)}
      onBlur={handleBlur}
      borderColor={borderColor}
      color={color}
      placeholderTextColor="#c8c8c9"
      {...rest}
    />
  );
};

export default forwardRef(Input);
