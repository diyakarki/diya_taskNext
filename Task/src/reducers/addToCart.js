import { 
    GET_PRODUCTS,
     GET_PRODUCTS_SUCCESS,
     ADD_TO_CART } from '../constants/actiontype';


     export default(
    prevState ={
        products:[],
        addProduct:{}
    },
    action
) => {
    switch(action.type){
        case GET_PRODUCTS:
        return{
            ...prevState,
            isLoading:true
        };
        case  GET_PRODUCTS_SUCCESS:
        return{
            ...prevState,
            products:action.items,
            isLoading:false
        };
        case ADD_TO_CART:
        return{
            ...prevState,
            addProduct:{...prevState.addProduct,...action.addProductItem }
        }
        default:
        return prevState;
    }
};

// const initialState = {
//     cartvalue : 0
// }

// const addToCartReducer = (state = initialState, action) => {
//     switch (action.type) {
//           case GET_PRODUCTS:
//         return{
//             ...initialState,
//             isLoading:true
//         };
//         case GET_PRODUCTS_SUCCESS:
//         return{
//             ...initialState,
//             products:action.items,
//             isLoading:false
//         };
//         case ADD_TO_CART:
//         var state = {
//             ...state,
//             cartvalue : state.cartvalue + action.payload
//         }
//         return state;
//         default:
//         return state;
//     }
// };

// export default addToCartReducer;