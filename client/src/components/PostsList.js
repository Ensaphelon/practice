import React from 'react';

export default ({ posts, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (posts === null) {
    return null;
  }

  return posts.map(post => <div>{post.title}</div>);
};
