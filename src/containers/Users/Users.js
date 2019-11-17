import { useEffect } from 'react';

import useUsersActions from 'store/users/actions';
import useUsersSelectors from 'store/users/selectors';

const Users = ({ children }) => {
  const { loadUsers } = useUsersActions();
  const { getUsers, getLoadingState } = useUsersSelectors();

  const users = getUsers();
  const isLoading = getLoadingState();

  useEffect(() => {
    loadUsers();
  }, []);

  return children(users, isLoading);
};

export default Users;
