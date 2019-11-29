import { useDispatch } from 'react-redux';
import queryString from 'query-string';

import { actions } from './';

export default () => {
  const dispatch = useDispatch();

  const loadUsers = async name => {
    const response = await fetch(`http://localhost:8000/users/?${name ? queryString.stringify({ q: name }) : ''}`);
    const users = await response.json();

    dispatch(actions.setUsers(users));
  };

  return {
    loadUsers,
  };
};
