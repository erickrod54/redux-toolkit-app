import React from "react";
import CartItem from "./CartItem";
import { useSelector } from 'react-redux'

/**React-redux toolkit app - version 2  - 'CartContainer' js - 
 * Features:
 * 
 *      --> Destructuring 'cartItems', 'total', 'amount' 
 *          from useSelector
 * 
 *      --> Depending on the 'amount', rendering 
 *          conditionally an empty message or 
 *          the comtainer.
 * 
 *      --> Mapping the 'cartItems' data and spreading
 *          props 'CartItem' Component
 * 
 * Note: Setting amount value will display the CartContainer
 * reference to CarContainer code.
 */

const CartContainer = () => {
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
            <button className="btn clear-btn">clear cart</button>
        </footer>
    </div>
}

export default CartContainer;