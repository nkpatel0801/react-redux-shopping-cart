import {
    ADD_PRODUCT_TO_CART,
    INCREASE_QUANTITY, DECREASE_QUANTITY,
    UPDATE_CART_QTY,
    UPDATE_TOTAL_PRICE,
    REMOVE_PRODUCT,
    GET_PRODUCTS
} from './../constants/action-types'

const initialState = {
    list: [],
    cartProducts: [],
    totalAmount: 0,
    totalPrice: 0
}

export default function (state = initialState, action) {
    let cartProducts = [...state.cartProducts];

    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                list: action.payload
            }

        case ADD_PRODUCT_TO_CART:
            if (cartProducts && cartProducts.length && cartProducts.indexOf(action.payload) !== -1) {
                cartProducts.forEach(item => {                    
                    if (item.title === action.payload.title) {
                        item.qty = item.qty + 1
                        item.cost = item.qty * item.price
                    }
                });
            } else {
                action.payload.qty = 1;
                action.payload.cost = +action.payload.price;
                cartProducts.push(action.payload);
                cartProducts = [...cartProducts]
            }
            return {
                ...state,
                cartProducts,
            }

        case UPDATE_CART_QTY:
            let totalAmount = state.cartProducts.length ? state.cartProducts.map(o => o.qty).reduce((a, c) => { return a + c }) : 0;
            return {
                ...state,
                totalAmount
            }

        case UPDATE_TOTAL_PRICE:
            let totalPrice = state.cartProducts.length ? state.cartProducts.map(o => +o.cost).reduce((a, c) => { return a + c }) : 0;
            return {
                ...state,
                totalPrice
            }

        case INCREASE_QUANTITY:
            if (cartProducts && cartProducts.length) {
                cartProducts.forEach(item => {
                    if (item.title === action.title) {
                        item.qty = item.qty + 1
                        item.cost = item.qty * item.price
                    }
                });
            }
            return {
                ...state,
                cartProducts
            }

        case DECREASE_QUANTITY:
            if (cartProducts && cartProducts.length) {
                cartProducts.forEach(item => {
                    if (item.title === action.title) {
                        item.qty = item.qty - 1
                        item.cost = item.qty * item.price
                    }
                });
            }
            return {
                ...state,
                cartProducts
            }

        case REMOVE_PRODUCT:
            return {
                ...state,
                cartProducts: cartProducts.filter((item) => item.title !== action.title)
            }

        default:
            return state;
    }
}