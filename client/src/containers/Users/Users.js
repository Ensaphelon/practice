import React, { useEffect } from 'react';

import { useUsersActions } from 'store/users';
import { getUsers } from 'store/users/selectors';

const Users = ({ children }) => {
  const { fetchUsers } = useUsersActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  const users = getUsers();

  return children(users);
};

export default Users;
