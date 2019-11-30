import 'reset-css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import UsersContainer from 'containers/Users';

import Users from 'components/Users';

const { Filter, List } = Users;

const App = () => {
  return (
    <Provider store={store}>
      <UsersContainer>
        {(users, searchValue, onChangeSearchValue) => (
          <>
            <Filter searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} />
            <List items={users} />
          </>
        )}
      </UsersContainer>
    </Provider>
  );
};

export default App;
