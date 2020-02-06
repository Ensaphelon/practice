import { configureStore } from '@reduxjs/toolkit';

import PostsSlice from './posts';

export default configureStore({ reducer: { PostsSlice } });
