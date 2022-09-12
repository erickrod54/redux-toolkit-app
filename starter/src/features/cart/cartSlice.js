import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

/**React-redux toolkit app - version 2  - 'cartSlice' js - 
 * Features:
 * 
 *      --> Setting amount value to 4, in order
 *          to visualize and build CartContainer
 *          Component
 * 
 * Note: Setting amount value will display the CartContainer
 * reference to CarContainer code.
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