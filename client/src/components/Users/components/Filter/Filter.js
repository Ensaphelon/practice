import React from 'react';
import { TextInput, Menu, CheckBox } from 'grommet';
import { Filter as FilterIcon } from 'grommet-icons';

const Filter = ({
  columns,
  activeColumns,
  searchValue,
  onChangeSearchValue,
  onAddActiveColumn,
  onRemoveActiveColumn,
}) => {
  const handlePropertyChange = column => ({ target: { checked } }) => {
    checked ? onAddActiveColumn(column) : onRemoveActiveColumn(column);
  };

  return (
    <>
      <TextInput placeholder="Search" value={searchValue} onChange={onChangeSearchValue} />
      <Menu
        label={<FilterIcon />}
        items={columns.map(column => ({
          label: (
            <CheckBox checked={activeColumns.includes(column)} label={column} onChange={handlePropertyChange(column)} />
          ),
        }))}
      />
    </>
  );
};

export default Filter;
