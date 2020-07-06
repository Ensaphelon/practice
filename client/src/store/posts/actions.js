import { TODOS_LOADING_START, TODOS_LOADING_SUCCESS, TODOS_LOADING_FAIL } from './constants';

export const loadPosts = dispatch => {
  dispatch({ type: TODOS_LOADING_START });

  return fetch('http://localhost:8000/posts')
    .then(response => response.json())
    .then(data => {
      dispatch({ type: TODOS_LOADING_SUCCESS, data });
    })
    .catch(() => {
      dispatch({ type: TODOS_LOADING_FAIL });
    });
};
