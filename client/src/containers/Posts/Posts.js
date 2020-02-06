import React, { useEffect } from 'react';

import { usePostsActions } from 'store/posts';
import usePostsSelectors from 'store/posts/selectors';

const Posts = ({ children }) => {
  const { getPosts, getPostsLoadingState } = usePostsSelectors();
  const { loadPosts } = usePostsActions();

  const posts = getPosts();
  const loading = getPostsLoadingState();

  useEffect(() => {
    loadPosts();
  }, []);

  return children({ posts, loading });
};

export default Posts;
