import { REGISTER_SUCCESS, LOGIN_SUCCESS, SET_USER, LOGOUT } from '../types/auth.types';
import { SET_LOADING, SET_ERROR } from '../types/common.types';

const initialState = {
  token: sessionStorage.getItem('token'),
  loading: false,
  user: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      sessionStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        user: payload.user,
      };
    case LOGOUT:
      sessionStorage.removeItem('token');
      return {
        ...initialState,
      };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
