import {
  GET_ORGANIZATION,
  PUT_ORGANIZATION,
  ORGANIZATION_LOADING,
  ORGANIZATION_SUCCESS,
  ORGANIZATION_ERROR,
} from '../types/organization.types';

const initialState = {
  name: '',
  image: '',
  phone: '',
  address: '',
  welcomeText: '',
  facebook: '',
  linkedin: '',
  instagram: '',
};

const organizationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORGANIZATION:
      return { ...state, ...payload };
    case ORGANIZATION_LOADING:
      return { ...state, loading: payload };
    case ORGANIZATION_ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default organizationReducer;

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
