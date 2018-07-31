import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';

import products from './manager';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const store = createStore(
    connectRouter(history)(products),
    compose(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);

export default store;
