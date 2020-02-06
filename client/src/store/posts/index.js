import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    setPosts(state, { payload }) {
      state.data = payload;
    },
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
  },
});

export const { reducer, actions } = postsSlice;

export const usePostsActions = () => {
  const dispatch = useDispatch();

  const loadPosts = async () => {
    dispatch(postsSlice.actions.startLoading());
    const response = await fetch('http://localhost:8000/posts');
    const posts = await response.json();

    dispatch(postsSlice.actions.stopLoading());

    dispatch(postsSlice.actions.setPosts(posts));
  };

  return {
    loadPosts,
  };
};

export default postsSlice.reducer;
