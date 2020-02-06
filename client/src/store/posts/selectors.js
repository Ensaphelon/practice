import { useSelector } from 'react-redux';

export default () => {
  return {
    getPosts: () => useSelector(state => state.PostsSlice.data),
    getPostsLoadingState: () => useSelector(state => state.PostsSlice.loading),
  };
};
