import { NEWS_LOADING, NEWS_ERROR, NEWS_ENTRIES } from '../types/news.types';
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

const newsLoading = (payload) => ({ type: NEWS_LOADING, payload });
const newsError = (payload) => ({ type: NEWS_ERROR, payload });
const newsEntries = (payload) => ({ type: NEWS_ENTRIES, payload });
