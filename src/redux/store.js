import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = configureStore({ reducer: rootReducer, middleware });

export default store;
