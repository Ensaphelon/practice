import React, { useState, useEffect } from 'react';

import { useUsersActions } from 'store/users';
import { getUsers } from 'store/users/selectors';

import { useTextInput } from 'hooks';

const columns = ['name', 'email', 'phone'];

const Users = ({ children }) => {
  const [activeColumns, setActiveColumns] = useState(columns);
  const { fetchUsers } = useUsersActions();

  const [searchValue, setSearchValue] = useTextInput('');

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
  }, [searchValue]);

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
