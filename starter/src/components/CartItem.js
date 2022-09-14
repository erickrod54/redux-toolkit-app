import React from "react";
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux"; 

/**React-redux toolkit app - version 4  - 'CartItem' js - 
 * Features:
 * 
 *      --> Importing 'useDispatch' hook from 
 *          redux.
 * 
 *      --> Importing 'removeItem' action from 
 *          the 'cartSlice' 
 * 
 *      --> Dispatching 'removeItem' action
 *          in order to remove the item.
 * 
 * Note: these props were previusly spreaded on 
 * CartContainer -check the code for reference -
 * and here i just access them.
 */

const CartItem = ({ id, img, title, price, amount }) => {

    /**here  asign 'useDispatch' to 'dispatch' variable*/
    const dispatch = useDispatch();

    return(
        <article className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">
                    ${price}
                </h4>
                {/**here i trigger the 'removeItem' using
                 * dispatch and targeting the 'id'*/}
                <button 
                    className="remove-btn"
                    onClick={() => { dispatch(removeItem(id))}}
                    >remove</button>
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