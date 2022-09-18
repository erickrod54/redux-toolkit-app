import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**uncomment to test 'thunkAPI.dispatch' */
//import { openModal } from "../modal/modalSlice";

import axios from "axios";

/**React-redux toolkit app - version 10  - 'cartSlice' js - 
 * Features:
 * 
 *      --> Testing 'axios' options combined with 
 *          'asyncThunk'
 * 
 *      --> Testing thunkAPI options
 * 
 * Note: First Test** - Axios combined with asyncThunk to
 * pass a value 'name' throught the async ( is being passed 
 * previouslly throught the useEffect )
 * 
 * Second Test** - The thunkAPI itself will give me powerful 
 * options as (these actions are over all 'reducers' object
 * i can get states features and implemented right away):
 * 
 *          --> dispatch(), getState(), rejectWithValue()
 *              requestId(), signal
 * 
 * for dispatch a feature i have to import first the feature
 * - the case for 'openModal' -, and using thunkAPI i'll 
 * dispatch  
 * 
 * here i test 'dispatch()', 'getState()', 'rejectWithValue()'
 */

/**this is the API url */
const url = 'https://course-api.com/react-useReducer-cart-project'

/**uncomment to test 'rejectWithValue()'*/
//const url = 'https://course-api.com/react-useReducer-cart-projectss';

/**to test it out change the amount value */
const initialState = {
    cartItems: [],
    amount:4,
    total:0,
    isLoading:true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', 
    async (name, thunkAPI ) => {
        try {
            /**First test - uncomment to try it out */
            //console.log('value passed througth the async ==>',name)

            /**Second test */
            console.log(thunkAPI)
            
            /**getting reducers state */
            /**uncomment to test it */
            //console.log('here i get the reducer states ==>', thunkAPI.getState())
            
            /**triggering 'openModal' - this feature is in modalSlice
             * but thanks to 'thunkApi' i can bring it in*/
            /**uncomment to test it */

            //thunkAPI.dispatch(openModal())


            const resp = await axios(url)
            return resp.data
        } catch (error) {
            /**check in the 'payload' of the resulting object */
            return thunkAPI.rejectWithValue('something went wrong')
        }
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
            /**Testing that the action is sent and dispatched -
             * uncomment to try it out*/
            
            //console.log('this is the action getCartItems ==>',action)
            state.isLoading = false
            state.cartItems = action.payload
        },
        /** now i handle the error using 'rejectWithValue()', so
         * i set the action*/
        [getCartItems.rejected]:(state, action) => {
            console.log(action)
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



