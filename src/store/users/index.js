const initialState = {
  users: {
    data: null,
    isLoading: false,
    isUpdating: false,
    isDeleting: false,
  },
};

export default store => {
  store.on('@init', () => initialState);

  store.on('users/set', (currentStoreState, data) => {
    return { ...store, users: { ...currentStoreState.users, data } };
  });

  store.on('users/loading/start', currentStoreState => {
    return { ...store, users: { ...currentStoreState.users, isLoading: true } };
  });

  store.on('users/loading/stop', currentStoreState => {
    return { ...store, users: { ...currentStoreState.users, isLoading: false } };
  });
};
