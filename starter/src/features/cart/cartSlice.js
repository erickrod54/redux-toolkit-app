import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

/**React-redux toolkit app - version 6  - 'cartSlice' js - 
 * Features:
 * 
 *      --> Building 'calculateTotals' feature.
 * 
 * Note: for 'increase' and 'decrease' features i use
 * the state and pull the payload in order to use the 
 * id and compare with the state id before the increase
 * or decrease value
 * 
 * this feature will increase or decrease dinamiclly the
 * item totals on the right corner icons and the 
 * CartItem footer
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
        },
        calculateTotals:(state) => {
            /**i create this two variables */
            let amount = 0
            let total = 0
            /**i access to the state and iterate
             * on the item */
            state.cartItems.forEach((item) => {
                /**i totalize the 'item' in 'amount'*/
                amount += item.amount
                /**for the total i totalize
                 * 'item' multiplied for the 'price'*/
                total += item.amount * item.price
            })
            /**i assing the resulting values from
             * the iteration to the 'state' values
             */
            state.amount = amount;
            state.total = total;
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

/**i export the calculateTotal in order to implement it */
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;