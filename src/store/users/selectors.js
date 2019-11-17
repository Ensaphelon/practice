import useStoreon from 'storeon/react';

export default () => {
  const { users } = useStoreon('users');

  const getUsers = () => users.data;

  const getLoadingState = () => users.isLoading;

  return {
    getUsers,
    getLoadingState,
  };
};
