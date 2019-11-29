import 'reset-css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';

import createStore from 'store';
import { useTextInput } from 'hooks';

import Users from 'containers/Users';

import UsersComponents from 'components/Users';

import { getUsersLoadingParams } from 'utils/loadingParams';

const store = createStore();

const App = () => {
  const [searchValue, changeSearchValue] = useTextInput('');

  return (
    <Provider store={store}>
      <Users loadingParams={getUsersLoadingParams({ searchValue })}>
        {users => (
          <UsersComponents.List searchValue={searchValue} onChangeSearchValue={changeSearchValue} items={users} />
        )}
      </Users>
    </Provider>
  );
};

export default App;
