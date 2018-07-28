import mock_data from './MOCK_DATA.json';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const getProducts = dispatch => {
    dispatch(requestProducts());
    return dispatch(receiveProducts(mock_data.json()));
}

export const requestProducts = () => ({
    type: REQUEST_PRODUCTS
})

export const receiveProducts = (json) => ({
    type: RECEIVE_PRODUCTS,
    products: json
})


