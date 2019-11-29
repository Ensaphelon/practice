import { useMount } from 'hooks';

import useUsersActions from 'store/users/actions';
import { getUsers } from 'store/users/selectors';

const Users = ({ children, loadingParams }) => {
  const { loadUsers } = useUsersActions();
  const users = getUsers();
  const { searchValue } = loadingParams;

  const handleLoadUsers = () => loadUsers(searchValue);

  useMount({ onMount: handleLoadUsers }, [searchValue]);

  return children(users);
};

export default Users;
