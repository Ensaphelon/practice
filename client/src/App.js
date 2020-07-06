import 'reset-css';
import React from 'react';

import PostsContainer from 'containers/PostsContainer';

import PostsList from 'components/PostsList';

const App = () => {
  return (
    <PostsContainer>
      {({ posts, isLoading, loadPosts }) => <PostsList loadPosts={loadPosts} posts={posts} isLoading={isLoading} />}
    </PostsContainer>
  );
};

export default App;
