import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = [thunk, logger];

const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;