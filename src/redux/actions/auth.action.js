import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, SET_USER } from '../types/auth.types';
import { loading, setError } from './common.action';

import fetchApi from '../../axios/axios';

export const loginAction =
  ({ url, method, data }) =>
  async (dispatch) => {
    dispatch(loading(true));
    try {
      const res = await fetchApi({ url, method, data });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(setError(err.message));
    } finally {
      dispatch(loading(false));
    }
  };

export const registerAction =
  ({ url, method, data }) =>
  async (dispatch) => {
    dispatch(loading(true));
    try {
      const res = await fetchApi({ url, method, data });
      dispatch(registerSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(setError(err.message));
    } finally {
      dispatch(loading(false));
    }
  };

export const fetchUser = (options) => async (dispatch, state) => {
  dispatch(loading(true));
  try {
    const { data } = await fetchApi(options);
    dispatch(setUser(data));
  } catch (err) {
    console.log(err);
    dispatch(setError(err.message));
    if (err?.response?.status === 403) {
      sessionStorage.removeItem('token');
    }
  } finally {
    dispatch(loading(false));
  }
};

export const logout = () => {
  return { type: LOGOUT };
};

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};
