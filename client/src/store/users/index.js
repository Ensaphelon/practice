import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { actions, reducer } = usersSlice;

export default reducer;
