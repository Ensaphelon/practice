import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useLocalStorage } from 'react-use';

import { useUsersActions } from 'store/users';
import { getUsers } from 'store/users/selectors';

import { useTextInput } from 'hooks';

const columns = ['name', 'email', 'phone'];

const Users = ({ children }) => {
  const [activeColumns, setActiveColumns] = useLocalStorage('activeColumns', columns);
  // const [activeColumns, setActiveColumns] = useState(columns);

  const { fetchUsers } = useUsersActions();

  const [searchValue, setSearchValue] = useTextInput('');
  const [debouncedSearchValue] = useDebounce(searchValue, 1000);

  const addActiveColumn = columnName => {
    const updatedColumns = [...activeColumns, columnName];

    setActiveColumns(updatedColumns);
  };

  const removeActiveColumn = columnName => {
    const updatedColumns = activeColumns.filter(column => column !== columnName);

    setActiveColumns(updatedColumns);
  };

  useEffect(() => {
    fetchUsers({ params: { name: searchValue } });
  }, [debouncedSearchValue]);

  const users = getUsers();

  return children({
    users,
    columns,
    searchValue,
    onChangeSearchValue: setSearchValue,
    activeColumns,
    addActiveColumn,
    removeActiveColumn,
  });
};

export default Users;
