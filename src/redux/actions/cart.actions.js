import * as actionTypes from "./actionsTypes";

export const addToCart = (product) => {
    return(
        {
            type: actionTypes.ADD_TO_CART,
            payload: product
        }
    )
}

export const removeFromCart = (productId) => {
    return(
        {
            type: actionTypes.REMOVE_FROM_CART,
            payload: productId
        }
    )
}

export const checkout = () => {
    return(
        {
            type: actionTypes.CHECKOUT
        }
    )
}