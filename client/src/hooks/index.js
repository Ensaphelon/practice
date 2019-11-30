import { useState } from 'react';

export const useTextInput = (initialState = '') => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleChangeInputValue = ({ target: { value } }) => setInputValue(value);

  return [inputValue, handleChangeInputValue];
};
