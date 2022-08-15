import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../types/auth.types';
import { loading } from './common.action';

import fetchApi from '../../axios/axios';

//LOGIN user
export const loginAction =
  ({ url, method, data }) =>
  async (dispatch) => {
    dispatch(loading(true));
    try {
      const res = await fetchApi({ url, method, data });
      dispatch(loginSucces(res.data));
    } catch (err) {
      // const errors = err.response.data.errors;
      // if (errors) {
      //   // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      // }
      // dispatch({ type: LOGIN_FAIL });
    } finally {
      dispatch(loading(false));
    }
  };

//register user
export const registerAction =
  ({ url, method, data }) =>
  async (dispatch) => {
    dispatch(loading(true));
    try {
      const res = await fetchApi({ url, method, data });
      dispatch(registerSucces(res.data));
    } catch (err) {
      // const errors = err.response.data.errors;
      // if (errors) {
      //   // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      // }
      // dispatch({ type: LOGIN_FAIL });
    } finally {
      dispatch(loading(false));
    }
  };

const loginSucces = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const registerSucces = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};
