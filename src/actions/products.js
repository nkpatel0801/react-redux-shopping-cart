import {
    UPDATE_CART_QTY,
    ADD_PRODUCT_TO_CART,
    UPDATE_TOTAL_PRICE,
    REMOVE_PRODUCT,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    GET_PRODUCTS
} from './../constants/action-types';
import { getProductsData } from "../services/products";

const updateTotalPriceAndAmount = (dispatch) => {
    dispatch({
        type: UPDATE_CART_QTY,
        payload: null
    });
    dispatch({
        type: UPDATE_TOTAL_PRICE,
        payload: null
    });
}

export const addProductToCart = (product) => dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
    })
    updateTotalPriceAndAmount(dispatch);
}

export const removeProductFromCart = (title) => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT,
        title
    });
    updateTotalPriceAndAmount(dispatch);
}

export const increaseQuantity = (title) => dispatch => {
    dispatch({
        type: INCREASE_QUANTITY,
        title
    });
    updateTotalPriceAndAmount(dispatch);
}

export const decreaseQuantity = (title) => dispatch => {
    dispatch({
        type: DECREASE_QUANTITY,
        title
    });
    updateTotalPriceAndAmount(dispatch);
}


export const getProducts = () => dispatch => {
    getProductsData().then((res) => {
        console.log('test', res);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    }).catch((err) => {
        console.log(err);
    })
}
