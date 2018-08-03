import {combineReducers} from 'redux';
import { 
    REQUEST_PRODUCTS, 
    RECEIVE_PRODUCTS 
} from '../actions';


const initialState = {
    isFetching: true,
    products: []
};

const products = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                isFetching: false,
                products: action.products
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    products
})

export default rootReducer;
