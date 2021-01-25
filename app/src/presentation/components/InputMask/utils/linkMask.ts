const linkMask = (textInput: string): string => {
  const parsedTextInput = textInput.replace(
    /^http:\/\/www\.(\w)$/,
    'http://$1',
  );
  return parsedTextInput;
};

export default linkMask;
