import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import useTextInput from 'hooks/useTextInput';

const Form = ({ someProp }) => {
  const [currentValue, handleChangeText] = useTextInput('');
  const inputReference = useRef();

  console.warn(someProp);

  useEffect(() => {
    console.warn(inputReference);

    return () => {
      console.warn(inputReference);
    };
  }, []);

  const setInputFocus = () => inputReference.current.focus();

  return (
    <div>
      <input ref={inputReference} type="text" value={currentValue} onChange={handleChangeText} />
      <button onClick={setInputFocus}>Focus</button>
    </div>
  );
};

Form.propTypes = {
  someProp: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Form;
