import { SET_LOADING, SET_ERROR, SET_SUCCESS } from '../types/common.types';

export const loading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  };
};

export const setSuccess = (payload) => {
  return {
    type: SET_SUCCESS,
    payload,
  };
};
