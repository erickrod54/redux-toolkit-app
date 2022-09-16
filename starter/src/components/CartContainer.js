import React from "react";
import CartItem from "./CartItem";
import { useDispatch ,useSelector } from 'react-redux';
import { openModal } from "../features/modal/modalSlice";


/**React-redux toolkit app - version 8  - 'CartContainer' js - 
 * Features:
 * 
 *      --> Importing 'openModal' from modalSlice
 *  
 *      --> Replacing 'clearCart' with 'openModal'
 *          dispatch. 
 * 
 * Note: 'openModal' was previusly exported directly from
 * 'modalSlice' js thats why can implemented directly without
 * need of destructre it.
 */

const CartContainer = () => {

    /**here i keep the hook in a varibale */
    const dispatch = useDispatch()

    const {cartItems, total, amount }  = useSelector(( store ) => store.cart)

    console.log(cartItems)

    if (amount < 1 ) {
        return(
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }

    return <div className="cart">
        <header>
            <h2>your bag</h2>
        </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item}/>
                })}
            </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>${total.toFixed(2)}</span>
                </h4>
            </div>
            {/**here on click -using arrow function- 
             * i implement the hook to invoke 'openModal'
             * action.
            */}
            <button 
                className="btn clear-btn" 
                onClick={ () => dispatch(openModal())}
                >clear cart</button>
        </footer>
    </div>
}

export default CartContainer;