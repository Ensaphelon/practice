import React from 'react';
import StoreContext from 'storeon/react/context';
import createStore from 'storeon';

import Users from 'containers/Users';

import UsersList from 'components/Users';

import storeModules from 'store';

const store = createStore(storeModules);

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <Users>{users => <UsersList users={users} />}</Users>
    </StoreContext.Provider>
  );
};

export default App;
