import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';

/**React-redux toolkit app - version 8  - 'Store' js - Features:
 * 
 *      --> Importing the modal.ruducer as 
 *          'modalReducer'
 * 
 * Note: here i set the new key named 'modal' with 'modalReducer'
 * value.
 */

export const store = configureStore({
    /**i set a new key fro modal */
    reducer:{
        cart: cartReducer,
        modal: modalReducer
    }
})

