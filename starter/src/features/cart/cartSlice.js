import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

/**React-redux toolkit app - version 4  - 'cartSlice' js - 
 * Features:
 * 
 *      --> Building 'removeItem' feature 
 *          in reducers - is going to be
 *          more actions-
 * 
 *      --> Accesing to the payload to remove
 *          the item.
 * 
 * Note: when i set 'console.log(cartSlice)' i can
 * se that actions is a method of cartSlice - i can 
 * check that actually i can mutate the sate due to
 * 
 * the mutation directly in the state is posible 
 * thanks to 'Immer libary' - this owns to redux
 * and behind the scenes makes all the complex
 * process-
 * 
 * if i set for remove item as:
 * (this way i know how to access
 * and build 'itemId = action.payload;' )
 *  
 *      removeItem: (state, action) => {
 *           console.log(action)
 *       }
 * 
 * i can validate the action and test that i'm
 * getting the payload, so visualizing and validating
 * that i just proceed to build it
 * 
 */


/**to test it out change the amount value */
const initialState = {
    cartItems: cartItems,
    amount:4,
    total:0,
    isLoading:true,
};


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId )
        }
    }
})

/**if a log cartSlice i can check all the method avaibles 
 * by redux to apply in the slice - as its a state i'm
 * going to use 'reduce'-*/

//console.log(cartSlice)

/**after export the 'cartSlice', i can import it in
 * the store naming it as i need - the reducer is also a 
 * method from 'redux' */

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;