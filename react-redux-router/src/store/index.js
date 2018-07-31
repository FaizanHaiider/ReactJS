import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import products from './manager';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const middleware = [thunk]
const store = createStore(
    connectRouter(history)(products),
    compose(
        applyMiddleware(
            ...middleware,
            routerMiddleware(history)
        )
    )
);

export default store;
