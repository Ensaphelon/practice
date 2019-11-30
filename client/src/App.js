import 'reset-css';
import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import UsersContainer from 'containers/Users';

import Users from 'components/Users';

const { Filter, List } = Users;

const App = () => {
  return (
    <Provider store={store}>
      <UsersContainer>
        {({ users, searchValue, onChangeSearchValue, activeColumns, columns, addActiveColumn, removeActiveColumn }) => (
          <>
            <Filter
              columns={columns}
              activeColumns={activeColumns}
              searchValue={searchValue}
              onChangeSearchValue={onChangeSearchValue}
              onAddActiveColumn={addActiveColumn}
              onRemoveActiveColumn={removeActiveColumn}
            />
            <List activeColumns={activeColumns} users={users} columns={columns} />
          </>
        )}
      </UsersContainer>
    </Provider>
  );
};

export default App;
