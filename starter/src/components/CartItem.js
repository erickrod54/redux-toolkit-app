import React from "react";
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux"; 

/**React-redux toolkit app - version 5  - 'CartItem' js - 
 * Features:
 * 
 *      --> Importing 'increase', and 'decrease'
 *          features from 'cartSlice'.
 * 
 *      --> Dispatching 'increase' and 'decrease'
 *          features.
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
                {/**here i trigger the increase targeting
                 * the item 'id'*/}
                <button 
                className="amount-btn"
                onClick={() => {
                    dispatch(increase({id}))
                }}
                >
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                {/**for the decrease will depend on 
                 * 'amount' value, will 'removeItem'
                 * and also 'decrease' both depending
                 * on the 'id' ( i have to return it,
                 * if not, it will keep going )
                 */}
                <button 
                className="amount-btn"
                onClick={() => {
                    if(amount === 1){
                        dispatch(removeItem(id))
                        return;
                    }
                    dispatch(decrease({id}))
                }}
                >
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem;