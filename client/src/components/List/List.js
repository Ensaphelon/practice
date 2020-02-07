import React from 'react';
import { Button } from 'grommet';

const List = ({ currentValue, onToggle }) => {
  return (
    <>
      <div>{`${currentValue}`}</div>
      <Button onClick={onToggle}>Toggle</Button>
    </>
  );
};

export default List;
