import { NEWS_LOADING, NEWS_ERROR, NEWS_ENTRIES, GET_NEW, CLEAR_NEW } from '../types/news.types';
import fetchApi from '../../axios/axios';

export const fetchNews = (options) => async (dispatch, state) => {
  dispatch(newsLoading(true));
  dispatch(newsError(null));
  try {
    await fetchApi(options);
    // Re-fetch and set fresh data after operation
    const { data } = await fetchApi({ url: '/news' });
    dispatch(newsEntries(data));
  } catch (err) {
    console.log(err);
    dispatch(newsError(err.message));
  } finally {
    dispatch(newsLoading(false));
  }
};

export const getNew = (options) => async (dispatch, state) => {
  dispatch(newsLoading(true));
  dispatch(newsError(null));
  try {
    const { data } = await fetchApi(options);
    dispatch(loadNew(data));
  } catch (err) {
    console.log(err);
    dispatch(newsError(err.message));
  } finally {
    dispatch(newsLoading(false));
  }
};

export const cleanNew = (options) => async (dispatch, state) => {
  dispatch(newsLoading(true));
  dispatch(newsError(null));
  try {
    dispatch(clearNew(options));
  } catch (err) {
    dispatch(newsError(err.message));
  } finally {
    dispatch(newsLoading(false));
  }
};

const newsLoading = (payload) => ({ type: NEWS_LOADING, payload });
const newsError = (payload) => ({ type: NEWS_ERROR, payload });
const newsEntries = (payload) => ({ type: NEWS_ENTRIES, payload });
const loadNew = (payload) => ({ type: GET_NEW, payload });
const clearNew = (payload) => ({ type: CLEAR_NEW, payload });
