import 'reset-css';
import React from 'react';
import { pipe } from 'ramda';

import PostsContainer from 'containers/Posts';

import List from 'components/List';
import Form from 'components/Form';
import WithLogger from 'components/WithLogger';
import WithSwitcher from 'components/WithSwitcher';

const ListWithLoggerAndSwitcher = pipe(
  WithLogger,
  WithSwitcher,
)(List);

const App = () => {
  return (
    <>
      <Form someProp={{ userName: 'Some name' }} />
      <ListWithLoggerAndSwitcher initialValue={true} />
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
    </>
  );
};

export default App;
