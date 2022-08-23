import { NEWS_LOADING, NEWS_ERROR, NEWS_ENTRIES, GET_NEW, CLEAR_NEW } from '../types/news.types';

const initialState = {
  loading: false,
  error: null,
  entries: [],
  entrie: {},
};

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEWS_LOADING:
      return { ...state, loading: payload };
    case GET_NEW:
      return { ...state, entrie: payload };
    case CLEAR_NEW:
      return { ...state, entrie: {} };
    case NEWS_ERROR:
      return { ...state, error: payload };
    case NEWS_ENTRIES:
      return { ...state, entries: [...payload] };
    default:
      return { ...state };
  }
};

export default newsReducer;
