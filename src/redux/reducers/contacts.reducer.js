import {
  GET_CONTACTS,
  DELETE_CONTACT,
  CONTACTS_LOADING,
  CONTACTS_ERROR,
} from '../types/contacts.types';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, contacts: payload };
    case DELETE_CONTACT:
      return { ...state, contacts: state.contacts.filter((contact) => contact.id !== payload) };
    case CONTACTS_LOADING:
      return { ...state, loading: payload };
    case CONTACTS_ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default contactsReducer;
