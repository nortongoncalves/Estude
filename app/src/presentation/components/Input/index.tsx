import React, {
  useRef,
  useCallback,
  useState,
  useImperativeHandle,
  useEffect,
  useContext,
  forwardRef,
  memo,
} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import FormContext from '../../contexts/FormContext';
import {Container} from './styles';

export interface IInputHandles {
  focus: () => void;
}
interface IPropsInput extends TextInputProps {
  color?: string;
  borderColorFocus?: string;
  name: string;
}
export interface ITextInputRef extends TextInput {
  value: string;
}

const Input: React.ForwardRefRenderFunction<IInputHandles, IPropsInput> = (
  {name, color, borderColorFocus = '#c8c8c9', ...rest},
  ref,
) => {
  const inputRef = useRef<ITextInputRef>(null);
  const [borderColor, setBorderColor] = useState('');
  const {registerField} = useContext(FormContext);

  const handleFocus = useCallback((colorBorder: string) => {
    setBorderColor(colorBorder);
  }, []);

  const handleBlur = useCallback(() => {
    setBorderColor('#c8c8c9');
  }, []);

  const handleChangeText = useCallback((value: string) => {
    if (!inputRef.current) return;
    inputRef.current.value = value;
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
      onFocus={() => handleFocus(borderColorFocus)}
      onBlur={handleBlur}
      onChangeText={handleChangeText}
      borderColor={borderColor}
      color={color}
      placeholderTextColor="#c8c8c9"
      {...rest}
    />
  );
};

export default memo(forwardRef(Input));
