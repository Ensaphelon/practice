import { useState } from 'react';

export default initialValue => {
  const [textValue, setTextValue] = useState(initialValue);

  const handleChangeText = ({ target: { value } }) => setTextValue(value);

  return [textValue, handleChangeText];
};
