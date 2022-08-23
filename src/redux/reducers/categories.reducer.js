import {
  GET_CATEGORIES,
  DELETE_CATEGORY,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
} from '../types/categories.types';

const initialState = {
  categories: [],
  loading: null,
  error: null,
};

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      return { ...state, ...payload };
    case DELETE_CATEGORY:
      return { ...state, categories: state.categories.filter((member) => member.id !== payload) };
    case CATEGORIES_LOADING:
      return { ...state, loading: payload };
    case CATEGORIES_ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default categoriesReducer;
