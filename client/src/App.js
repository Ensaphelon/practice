import 'reset-css';
import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import Users from 'containers/Users';

import UsersList from 'components/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <Users>{users => <UsersList items={users} />}</Users>
    </Provider>
  );
};

export default App;
