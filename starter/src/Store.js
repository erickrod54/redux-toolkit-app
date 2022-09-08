import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';

/**React-redux toolkit app - version 1  - 'Store' js - Features:
 * 
 *      --> Building the store.
 * 
 *      --> Importing 'carSlice' naming it as 'cartReducer'
 *          and setting it as cart prop.
 * 
 * Note: By this version checking in 'DevTools' > Redux tab
 * i can visualize that i get the state as the 'cart' prop
 */

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

