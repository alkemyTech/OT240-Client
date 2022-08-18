import {
    GET_CONTACTS,
    DELETE_CONTACT,
    CONTACTS_LOADING,
    CONTACTS_ERROR,
} from '../types/categories.types';
  
  const initialState = {
    categories: [],
    loading: false,
    error: null,
  };
  
  const contactsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_CONTACTS:
        return { ...state, ...payload };
      case DELETE_CONTACT:
        return { ...state, categories: state.contacts.filter((contact) => contact.id !== payload) };
      case CONTACTS_LOADING:
        return { ...state, loading: payload };
      case CONTACTS_ERROR:
        return { ...state, error: payload };
      default:
        return { ...state };
    }
  };
  
  export default contactsReducer;