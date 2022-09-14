import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

/**React-redux toolkit app - version 5  - 'cartSlice' js - 
 * Features: (same version - fixing state accessing)
 * 
 *      --> Fixing the state 'state.cartItems'
 *          bug.
 * 
 * Note: for 'increase' and 'decrease' features i use
 * the state and pull the payload in order to use the 
 * id and compare with the state id before the increase
 * or decrease value
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
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id ===
            payload.id)
            cartItem.amount = cartItem.amount + 1;  
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id ===
            payload.id)
            cartItem.amount = cartItem.amount - 1;  
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

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;