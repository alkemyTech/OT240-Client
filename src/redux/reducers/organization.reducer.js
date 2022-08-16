import { GET_ORGANIZATION } from '../types/organization.types';

const initialState = {};

//demo de reducer
// export default function authReducer(state = initialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_LOADED:
//       return { ...state, isAuthenticated: true, loading: false, user: payload };

//     case GET_ORGANIZATION:
//     case LOGIN_SUCCESS:
//       localStorage.setItem('token', payload.token);
//       return { ...state, ...payload, isAuthenticated: true, loading: false };

//     case REGISTER_FAIL:
//     case AUTH_ERROR:
//     case LOGIN_FAIL:
//     case LOGOUT:
//     case ACCOUNT_DELETED:
//       localStorage.removeItem('token');
//       return { ...state, token: null, isAuthenticated: false, loading: false };

//     default:
//       return state;
//   }
// }
