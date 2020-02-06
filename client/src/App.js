import 'reset-css';
import React from 'react';

import PostsContainer from 'containers/Posts';

const App = () => {
  return (
    <PostsContainer>
      {({ posts, loading }) => (
        <div>
          {loading && <div>Loading...</div>}
          {posts.map(post => (
            <div>{post.id}</div>
          ))}
        </div>
      )}
    </PostsContainer>
  );
};

export default App;
