import { TESTIMONIAL_ENTRIES, TESTIMONIAL_ERROR, TESTIMONIAL_LOADING } from '../types/testimonial.types';

const initialState = {
  loading: false,
  error: null,
  entries: [],
};

const testimonialReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TESTIMONIAL_ENTRIES:
      return { ...state, entries: [...payload] }
    case TESTIMONIAL_ERROR:
      return { ...state, error: payload };
    case TESTIMONIAL_LOADING:
      return { ...state, loading: payload };
    default:
      return { ...state };
  }
};

export default testimonialReducer;
