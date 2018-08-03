import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import { connectRouter } from 'connected-react-router';
import products from './manager';

export const history = createBrowserHistory();

const middleware = [thunk];
const store = createStore(
    connectRouter(history)(products),
    applyMiddleware(...middleware)
);

export default store;
