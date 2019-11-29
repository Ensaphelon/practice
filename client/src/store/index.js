import { combineReducers, configureStore } from '@reduxjs/toolkit';

import users from './users';

export default () => {
  const reducer = combineReducers({
    users,
  });

  return configureStore({ reducer });
};
