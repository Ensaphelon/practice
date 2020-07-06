import { TODOS_LOADING_START, TODOS_LOADING_SUCCESS, TODOS_LOADING_FAIL } from './constants';

const initialState = {
  data: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS_LOADING_START:
      return { ...state, isLoading: true };
    case TODOS_LOADING_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case TODOS_LOADING_FAIL:
      return { ...state, data: [], isLoading: false };
    default:
      return state;
  }
};
