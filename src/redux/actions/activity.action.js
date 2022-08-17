import { ACTIVITY_ENTRIES, ACTIVITY_ERROR, ACTIVITY_LOADING } from '../types/activity.types';
import fetchApi from '../../axios/axios';

export const fetchAcivities = (options) => async (dispatch, state) => {
  dispatch(activitiesLoading(true));
  dispatch(activitiesError(null));
  try {
    await fetchApi(options);
    // Re-fetch and set fresh data after operation
    const { data } = await fetchApi({ url: '/activities' });    
    dispatch(activitiesEntries(data));
  } catch (err) {
    //console.log(err);
    dispatch(activitiesError(err.message));
  } finally {
    dispatch(activitiesLoading(false));
  }
};

const activitiesLoading = (payload) => ({ type: ACTIVITY_LOADING, payload });
const activitiesError = (payload) => ({ type: ACTIVITY_ERROR, payload });
const activitiesEntries = (payload) => ({ type: ACTIVITY_ENTRIES, payload });
