import {
  GET_CATEGORIES,
  DELETE_CATEGORY,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
} from '../types/categories.types';
import fetchApi from '../../axios/axios';

export const loadCategories = (options) => async (dispatch) => {
  dispatch(categoriesLoading(true));
  try {
    const { data } = await fetchApi(options);
    dispatch(getCategories(data));
  } catch (error) {
    dispatch(categoriesError(error.message));
  } finally {
    dispatch(categoriesLoading(false));
  }
};

export const deleteCategory = (options) => async (dispatch) => {
  dispatch(categoriesLoading(true));
  try {
    const { data } = await fetchApi(options);
    dispatch(delCategory(data.category.id));
  } catch (error) {
    dispatch(categoriesError(error.message));
  } finally {
    dispatch(categoriesLoading(false));
  }
};

const getCategories = (payload) => ({ type: GET_CATEGORIES, payload });
const delCategory = (payload) => ({ type: DELETE_CATEGORY, payload });
const categoriesError = (payload) => ({ type: CATEGORIES_ERROR, payload });
const categoriesLoading = (payload) => ({ type: CATEGORIES_LOADING, payload });
