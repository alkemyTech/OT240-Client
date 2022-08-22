import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_USER,
  AUTH_LOGOUT,
} from '../types/auth.types';
import fetchApi from '../../axios/axios';
import { successAlert } from '../../services/alert';

export const loginAction = (options, successCallback, errorCallback) => async (dispatch) => {
  dispatch(authLoading(true));
  dispatch(authError(null));
  try {
    const { data } = await fetchApi(options);
    sessionStorage.setItem('token', data.token);
    dispatch(authSuccess(data));
    successAlert({
      title: 'Inicio de sesión exitoso',
      icon: 'success',
    });
  } catch (err) {
    dispatch(authError(err.response.data.msg));
    successAlert({
      title: err.response.data.msg,
      icon: 'error',
    });
  } finally {
    dispatch(authLoading(false));
  }
};

export const registerAction = (options, successCallback, errorCallback) => async (dispatch) => {
  dispatch(authLoading(true));
  dispatch(authError(null));
  try {
    const { data } = await fetchApi(options);
    sessionStorage.setItem('token', data.token);
    dispatch(authSuccess(data));
    successAlert({
      title: 'Registro exitoso',
      icon: 'success',
    });
  } catch (err) {
    dispatch(authError(err.response.data.msg));
    successAlert({
      title: err.response.data.msg,
      icon: 'error',
    });
  } finally {
    dispatch(authLoading(false));
  }
};

export const fetchUser = (options) => async (dispatch) => {
  dispatch(authLoading(true));
  dispatch(authError(null));
  try {
    const { data } = await fetchApi(options);
    dispatch(authUser(data.user));
  } catch (err) {
    dispatch(authError(err.message));
    if (err?.response?.status === 403) {
      sessionStorage.removeItem('token');
    }
  } finally {
    dispatch(authLoading(false));
  }
};

const authUser = (payload) => ({ type: AUTH_USER, payload });
const authSuccess = (payload) => ({ type: AUTH_SUCCESS, payload });
const authError = (payload) => ({ type: AUTH_ERROR, payload });
const authLoading = (payload) => ({ type: AUTH_LOADING, payload });
export const logout = () => {
  sessionStorage.removeItem('token');
  return { type: AUTH_LOGOUT };
};
