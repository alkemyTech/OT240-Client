import { SET_ERROR, SET_LOADING } from '../types/common.types';
import { SET_NEWS } from '../types/news.types';

const initialState = {
  loading: false,
  news: [],
  error: null,
};

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEWS:
      return {
        ...state,
        news: [...payload],
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return { ...state };
  }
};

export default newsReducer;
