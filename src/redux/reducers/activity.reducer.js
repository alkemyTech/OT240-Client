import {
  ACTIVITY_ENTRIES,
  ACTIVITY_ERROR,
  ACTIVITY_LOADING,
  GET_ACTIVITY,
  CLEAR_ACTIVITY,
} from '../types/activity.types';

const initialState = {
  loading: false,
  error: null,
  entries: [],
  activity: {},
};

const activityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIVITY_ENTRIES:
      return { ...state, entries: [...payload] };
    case GET_ACTIVITY:
      return { ...state, activity: payload };
    case CLEAR_ACTIVITY:
      return { ...state, activity: {} };
    case ACTIVITY_ERROR:
      return { ...state, error: payload };
    case ACTIVITY_LOADING:
      return { ...state, loading: payload };
    default:
      return { ...state };
  }
};

export default activityReducer;
