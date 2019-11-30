import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const initialState = {
  users: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload.users;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;

export const useUsersActions = () => {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8000/users');
    const users = await response.json();

    dispatch(setUsers({ users }));
  };

  return {
    fetchUsers,
  };
};
