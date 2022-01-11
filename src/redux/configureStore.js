import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greeting/greeting';

const middleware = [thunk, logger];

const reducer = combineReducers({
  greetingReducer,
});

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
