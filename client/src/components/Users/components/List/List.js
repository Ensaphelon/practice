import React, { useState } from 'react';
import { take } from 'ramda';
import { CheckBox, TextInput, Menu, DataTable, Text } from 'grommet';
import { Filter } from 'grommet-icons';

import { useSelections, useLocalStorage } from 'hooks';

import Limiter from 'components/Limiter';

import classes from './styles';

const DEFAULT_LIMIT = 3;

const limits = [3, 5, 10];

const columns = [
  {
    property: 'email',
    header: <Text>Email</Text>,
    visible: true,
  },
  {
    property: 'phone',
    header: <Text>Phone</Text>,
    visible: true,
  },
  {
    property: 'website',
    header: <Text>Website</Text>,
    visible: true,
  },
];

const List = ({ items, searchValue, onChangeSearchValue }) => {
  if (!items) {
    return null;
  }

  const [storedLimitValue, setLimitValue] = useLocalStorage('limit', DEFAULT_LIMIT);
  const [filters, toggleFilter, getVisibleFilters, isFilterActive] = useSelections(columns);
  return (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.search}>
          <TextInput placeholder="Search" value={searchValue} onChange={onChangeSearchValue} />
        </div>
        <div className={classes.filters}>
          <Menu
            icon={<Filter />}
            items={filters.map(filter => ({
              label: (
                <CheckBox
                  label={filter.property}
                  checked={isFilterActive(filter)}
                  onChange={() => toggleFilter(filter)}
                />
              ),
            }))}
          />
        </div>
      </div>
      <div>
        <DataTable
          columns={[
            {
              property: 'name',
              header: <Text>Name</Text>,
              primary: true,
            },
            ...getVisibleFilters(),
          ]}
          data={take(storedLimitValue, items)}
        />
      </div>
      <div>
        <Limiter limits={limits} currentLimit={storedLimitValue} onChange={setLimitValue} />
      </div>
    </div>
  );
};

export default List;
