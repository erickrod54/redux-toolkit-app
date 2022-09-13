import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

/**React-redux toolkit app - version 3  - 'cartSlice' js - 
 * Features:
 * 
 *      --> Building 'clearCart' feature 
 *          in reducers - is going to be
 *          more actions-
 * 
 *      --> Destructuring and exporting 'clearCart'
 *          from 'cartSlice.actions'
 * 
 * Note: when i set 'console.log(cartSlice)' i can
 * se that actions is a method of cartSlice - i can 
 * check that actually i can mutate the sate due to
 * 
 * the mutation directly in the state is posible 
 * thanks to 'Immer libary' - this owns to redux
 * and behind the scenes makes all the complex
 * process-
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

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;