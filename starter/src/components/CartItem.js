import React from "react";
import { ChevronDown, ChevronUp } from '../icons';

/**React-redux toolkit app - version 3  - 'CartItem' js - 
 * Features:
 * 
 *      --> Building 'cartItem' Component.
 * 
 *      --> Destructuing props to build 'CartItem'.
 * 
 * Note: these props were previusly spreaded on 
 * CartContainer -check the code for reference -
 * and here i just access them.
 */

const CartItem = ({ id, img, title, price, amount }) => {
    return(
        <article className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">
                    ${price}
                </h4>
                <button className="remove-btn">remove</button>
            </div>
            <div>
                <button className="amount-btn">
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button className="amount-btn">
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem;