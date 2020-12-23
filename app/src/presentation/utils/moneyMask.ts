const moneyMask = (textInput: string): string => {
  const cleanTextinput = textInput.replace(/\D/g, '');
  let parsedTextInput = cleanTextinput;

  parsedTextInput = parsedTextInput.replace(/^[0]{1,4}$/, 'R$ 0,00');
  parsedTextInput = parsedTextInput.replace(/^[0]{3}([1-9])$/, 'R$ 0,0$1');
  parsedTextInput = parsedTextInput.replace(/^[0]{2}(\d{2})$/, 'R$ 0,$1');
  parsedTextInput = parsedTextInput.replace(/^[0](\d)(\d{2})$/, 'R$ $1,$2');
  parsedTextInput = parsedTextInput.replace(/(\d{1,3})(\d{2})$/, 'R$ $1,$2');
  parsedTextInput = parsedTextInput.replace(/^[0]([1-9])$/, 'R$ 0,0$1');
  parsedTextInput = parsedTextInput.replace(/^([1-9])[0]$/, 'R$ 0,$10');

  return parsedTextInput;
};

export default moneyMask;
