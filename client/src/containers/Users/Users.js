import React, { useState, useEffect } from 'react';

import { useUsersActions } from 'store/users';
import { getUsers } from 'store/users/selectors';

import { useTextInput } from 'hooks';

const Users = ({ children }) => {
  const { fetchUsers } = useUsersActions();

  const [searchValue, setSearchValue] = useTextInput('');

  useEffect(() => {
    fetchUsers({ params: { name: searchValue } });
  }, [searchValue]);

  const users = getUsers();

  return children(users, searchValue, setSearchValue);
};

export default Users;
