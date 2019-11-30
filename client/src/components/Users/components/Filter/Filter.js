import React from 'react';
import { TextInput } from 'grommet';

const Filter = ({ searchValue, onChangeSearchValue }) => {
  return <TextInput placeholder="Search" value={searchValue} onChange={onChangeSearchValue} />;
};

export default Filter;
