import {    
   getProductSuccess,
   getProductFailure  
} from "../actions/addToCart.js";
import { put, takeLatest } from "redux-saga/effects";
import {GET_PRODUCTS,  ADD_TO_CART} from "../constants/actiontype"; 
function* getProduct(){
    let url ="http://172.16.105.84:3000/api/ProducList";
    try{
        let items = yield fetch(url).then(rawData => rawData.json());
        yield put(getProductSuccess(items))
    }catch(error){
        yield put(getProductFailure(error));
    }
}
function* addProduct(action){
    let url="http://localhost:4000/products";
    try{
        let items = yield fetch("http://localhost:4000/products",{
            method:'POST',
            headers:{
                'Accept':'application/json','Content-Type':'application/json',
            },
            body:JSON.stringify(action.addProductItem)
        }).then(result => result.json());
    }catch(error){
        yield put(getProductFailure(error));
    }
}
export function* getProductWatcher(){
    yield [
    takeLatest(GET_PRODUCTS,getProduct)
    ]
}  