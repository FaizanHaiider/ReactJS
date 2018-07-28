import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import products from './manager';

const middleware = [thunk];
const store = createStore(
    products,
    applyMiddleware(...middleware)
);

export default store;
