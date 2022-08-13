import { SET_LOADING } from '../types/common.types';

export const loading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};
