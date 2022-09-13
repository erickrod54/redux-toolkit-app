import React from "react";
import CartItem from "./CartItem";
import { useDispatch ,useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice'


/**React-redux toolkit app - version 3  - 'CartContainer' js - 
 * Features:
 * 
 *      --> Implementing 'useDispatch' hook from
 *          'react-redux' to dispatch 'clearCart'
 *          action.
 * 
 *      --> Triggering 'clearcart' in dispacth to 
 *          clear the items from the cart
 * 
 * Note: i define the functuionality in the slice
 * 'cartSlice' and invoke it in dispatch action
 * and will trigger 'clearCart'.
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
                    total <span>${total}</span>
                </h4>
            </div>
            {/**here on click -using arrow function- 
             * i implement the hook to invoke 'clearCart'
             * action.
            */}
            <button 
                className="btn clear-btn" 
                onClick={ () => dispatch(clearCart())}
                >clear cart</button>
        </footer>
    </div>
}

export default CartContainer;