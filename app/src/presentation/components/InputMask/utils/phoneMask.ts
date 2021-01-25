import {parse} from 'react-native-svg';

const phoneMask = (textInput: string): string => {
  const cleanTextinput = textInput.replace(/\D/g, '');
  let parsedTextInput = cleanTextinput;

  parsedTextInput = parsedTextInput.replace(/^(\d{1})$/, '($1');
  parsedTextInput = parsedTextInput.replace(/^(\d{2})$/, '($1) ');
  parsedTextInput = parsedTextInput.replace(/^(\d{2})(\d{1,5})$/, '($1) $2');
  parsedTextInput = parsedTextInput.replace(
    /^(\d{2})(\d{1,4})(\d{1,4})$/,
    '($1) $2-$3',
  );
  parsedTextInput = parsedTextInput.replace(
    /^(\d{2})(\d{1,5})(\d{1,4})$/,
    '($1) $2-$3',
  );

  return parsedTextInput;
};

export default phoneMask;
