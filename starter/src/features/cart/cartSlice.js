import { createSlice } from "@reduxjs/toolkit";

/**React-redux toolkit app - version 1  - 'cartSlice' js - 
 * Features:
 * 
 *      --> Importing 'createSlice' from redux.  
 * 
 *      --> Building the slice 'cartSlice'
 * 
 * Note: A 'slice' in redux is a piece of state that controls a
 * feature
 * 
 * The 'createSlice' is own to redux and it creates a state piece
 * 
 * this 'slice' is going to be imported in store to be set as 
 * a 'cart' prop ( notice this is the first feature but the cart
 * can have many more )
 */


/**to test it out change the amount value */
const initialState = {
    cartItems: [],
    amount:0,
    total:0,
    isLoading:true,
};


const cartSlice = createSlice({
    name:'cart',
    initialState
})

/**if a log cartSlice i can check all the method avaibles 
 * by redux to apply in the slice - as its a state i'm
 * going to use 'reduce'-*/

//console.log(cartSlice)

/**after export the 'cartSlice', i can import it in
 * the store naming it as i need - the reducer is also a 
 * method from 'redux' */
export default cartSlice.reducer;