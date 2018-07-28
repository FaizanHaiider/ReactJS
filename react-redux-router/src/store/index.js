import {createStore, applyMiddleware, compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './manager';

// sync browserHistory with store
export const history = createHistory();

const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
]

if(process.env.NODE_ENV === 'development') {
    const devToolExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if(typeof devToolExtension === 'function') enhancers.push(devToolExtension());
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    connectRouter(history)(rootReducer),
    composedEnhancers
);

export default store;
