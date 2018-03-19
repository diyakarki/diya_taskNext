import {   GET_PRODUCTS,
     GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    ADD_TO_CART } from '../constants/actiontype';

export const addValueToCart = (value) => {
    return {
        type : ADD_TO_CART,
        payload : value 
    }
};
export function getProduct(){
    return{
        type:GET_PRODUCTS
    };
}
export function getProductSuccess(items){
    return{
        type: GET_PRODUCTS_SUCCESS,
        items
    };
}
export function getProductFailure(error){
    return{
        type:GET_PRODUCTS_FAILURE,
        error
    };
}