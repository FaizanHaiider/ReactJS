import {
    PRODUCTS_LENGTH,
    VIEW_ALL,
    ADD_PRODUCT,
    ADD_PATH,
    DELETE_PRODUCT,
    DELETE_PATH,
    GET_PRODUCTS
} from './action-types.js';

// create action object based on action type
export const productsLength = () => ({
    type: PRODUCTS_LENGTH
});

export const viewAll = () => ({
    type: VIEW_ALL
});

export const addProduct = () => ({
    type: ADD_PRODUCT
});

export const addPath = () => ({
    type: ADD_PATH
});

export const deleteProduct = () => ({
    type: DELETE_PRODUCT
});

export const deletePath = () => ({
    type: DELETE_PATH
});

export const getProducts = () => ({
    type: GET_PRODUCTS
});