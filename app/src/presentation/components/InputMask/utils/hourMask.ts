const hourMask = (textinput: string): string => {
  const cleanTextinput = textinput.replace(/\D/g, '');
  const parsedTextinput = cleanTextinput.replace(/(\d{2})(\d{1})/, '$1:$2');
  return parsedTextinput;
};

export default hourMask;
