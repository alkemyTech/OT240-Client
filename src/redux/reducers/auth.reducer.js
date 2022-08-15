import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../types/auth.types';
import { SET_LOADING } from '../types/common.types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  isAdmin: false,
  loading: false,
  user: null,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };

    // case USER_LOADED:
    //   return { ...state, isAuth: true, loading: false, user: payload };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      sessionStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        // isAdmin: payload.user.roleId == 1,
      };

    // case REGISTER_FAIL:
    // case AUTH_ERROR:
    // case LOGIN_FAIL:
    // case LOGOUT:
    // case ACCOUNT_DELETED:
    //   localStorage.removeItem('token');
    //   return { ...state, token: null, isAuthenticated: false, loading: false };

    default:
      return state;
  }
}
