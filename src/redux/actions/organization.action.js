import {
  GET_ORGANIZATION,
  PUT_ORGANIZATION,
  ORGANIZATION_LOADING,
  ORGANIZATION_SUCCESS,
  ORGANIZATION_ERROR,
} from '../types/organization.types';
import fetchApi from '../../axios/axios';

export const loadOrganization = (options) => async (dispatch) => {
  dispatch(organizationLoading(true));
  try {
    const { data } = await fetchApi(options);
    dispatch(getOrganization(data[0]));
  } catch (error) {
    dispatch(organizationError(error.message));
  } finally {
    dispatch(organizationLoading(false));
  }
};

const getOrganization = (payload) => ({ type: GET_ORGANIZATION, payload });
const organizationLoading = (payload) => ({ type: ORGANIZATION_LOADING, payload });
const organizationError = (payload) => ({ type: ORGANIZATION_ERROR, payload });

// demo de funcion
// export const loadUser = () => async (dispatch) => {
// 	if (localStorage.token) {
// 		setAuthToken(localStorage.token);
// 	}
// 	try {
// 		const res = await axios.get('/api/auth');
// 		dispatch({
// 			type: USER_LOADED,
// 			payload: res.data,
// 		});
// 	} catch (err) {
// 		dispatch({
// 			type: AUTH_ERROR,
// 		});
// 	}
// };
