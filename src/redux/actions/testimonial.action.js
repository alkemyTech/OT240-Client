import { TESTIMONIAL_ENTRIES, TESTIMONIAL_ERROR, TESTIMONIAL_LOADING } from '../types/testimonial.types';
import fetchApi from '../../axios/axios';

export const fetchTestimonial = (options) => async (dispatch, state) => {
  dispatch(TestimonialLoading(true));
  dispatch(TestimonialError(null));
  try {
    await fetchApi(options);
    // Re-fetch and set fresh data after operation
    const { data } = await fetchApi({ url: '/testimonials' });    
    dispatch(TestimonialEntries(data));
  } catch (err) {
    //console.log(err);
    dispatch(TestimonialError(err.message));
  } finally {
    dispatch(TestimonialLoading(false));
  }
};

const TestimonialLoading = (payload) => ({ type: TESTIMONIAL_LOADING, payload });
const TestimonialError = (payload) => ({ type: TESTIMONIAL_ERROR, payload });
const TestimonialEntries = (payload) => ({ type: TESTIMONIAL_ENTRIES, payload });
