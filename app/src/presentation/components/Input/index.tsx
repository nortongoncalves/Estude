import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
} from 'react';
import {TextInputProps, TextInput} from 'react-native';
import hourMask from '../../utils/hourMask';
import {Container} from './styles';

interface IPropsInput extends TextInputProps {
  mask?: 'hours' | null;
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

  const handleBlur = useCallback(() => {
    setBorderColor('#c8c8c9');
  }, []);

  const handleChangeText = useCallback((textinput: string) => {
    const parsedTextinput = hourMask(textinput);
    setValueInputMask(parsedTextinput);
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
        onFocus={() => handleFocus(borderColorFocus)}
        onBlur={handleBlur}
        value={valueInputMask}
        borderColor={borderColor}
        color={color}
        onChangeText={handleChangeText}
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
