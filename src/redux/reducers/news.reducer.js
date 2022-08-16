import { NEWS_LOADING, NEWS_ERROR, NEWS_ENTRIES } from '../types/news.types';

const initialState = {
  loading: false,
  error: null,
  entries: [],
};

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEWS_LOADING:
      return { ...state, loading: payload };
    case NEWS_ERROR:
      return { ...state, error: payload };
    case NEWS_ENTRIES:
      return { ...state, entries: [...payload] };
    default:
      return { ...state };
  }
};

export default newsReducer;
