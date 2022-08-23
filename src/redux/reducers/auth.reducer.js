import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_USER,
  AUTH_LOGOUT,
} from '../types/auth.types';

const initialState = {
  loading: true,
  error: null,
  user: null,
  token: sessionStorage.getItem('token'),
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_LOADING:
      return { ...state, loading: payload };
    case AUTH_SUCCESS:
      return { ...state, token: payload?.token, user: payload?.user };
    case AUTH_ERROR:
      return { ...state, error: payload };
    case AUTH_USER:
      return { ...state, user: payload };
    case AUTH_LOGOUT:
      return { ...state, token: null, user: null };
    default:
      return { ...state };
  }
}
