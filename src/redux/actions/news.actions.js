import { loading, setError } from './common.action';
import { SET_NEWS } from '../types/news.types';
import fetchApi from '../../axios/axios';

const fetchNews = (options) => async (dispatch, state) => {
  dispatch(loading(true));
  dispatch(setError(null));
  try {
    await fetchApi(options);
    const { data } = await fetchApi({ url: '/news' });
    dispatch(setNews(data));
  } catch (err) {
    console.log(err);
    dispatch(setError(err.message));
  } finally {
    dispatch(loading(false));
  }
};

const setNews = (payload) => {
  return {
    type: SET_NEWS,
    payload,
  };
};

export { fetchNews };
