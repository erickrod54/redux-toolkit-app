import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


/**React-redux toolkit app - version 9  - 'cartSlice' js - 
 * Features:
 * 
 *      --> Building 'getCartItems' action in order
 *          to get the cartItems from an API.
 * 
 *      --> After 'reducers' object building 'extraReducers'
 *          in order to set 'getCartItems' action in its three
 *          states 'pending', 'fulfilled', and 'rejected'
 * 
 *      --> Setting the 'cartItems' > 'intialState' to
 *          an empty array '[]'
 * 
 * Note: 'pending', 'fulfilled', and 'rejected' all this 
 * states comes from the redux object.
 * 
 * the cartItems: [] initial state is set to empty array
 * after i already build the 'getCartItems' action
 */

/**this is the API url */
const url = 'https://course-api.com/react-useReducer-cart-project'

/**to test it out change the amount value */
const initialState = {
    cartItems: [],
    amount:4,
    total:0,
    isLoading:true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', 
    () => {
        return fetch(url)
            .then((resp) => resp.json())
            .catch((err) => console.log(err))
    })


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
    },
    extraReducers:{
        [getCartItems.pending]:(state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]:(state, action) => {
            console.log('this is the action getCartItems ==>',action)
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]:(state) => {
            state.isLoading = false
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


