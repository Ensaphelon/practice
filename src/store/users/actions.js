import useStoreon from 'storeon/react';
import axios from 'axios';

import apiRoutes from 'routes/apiRoutes';

export default () => {
  const { dispatch } = useStoreon();

  const loadUsers = async () => {
    dispatch('users/loading/start');

    const { data } = await axios.get(apiRoutes.usersPath);

    dispatch('users/loading/stop');
    dispatch('users/set', data);

    return data;
  };

  return {
    loadUsers,
  };
};
