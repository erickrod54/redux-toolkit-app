import React from "react";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";

/**React-redux toolkit app - version 8  - Modal js - 
 * Features:
 * 
 *      --> Importing and dispatching 'clearCart()' and 
 *          'closeModal()' on confirm button.
 * 
 *      --> Importing and dispatching 'closeModal()' on 
 *          cancel button.
 * 
 * Note: this last functionality implemented will replaced
 * the 'clearCart' directlly and will add a confirmation
 * step.
 * 
 */

const Modal = () => {

    /**here i asign the 'dispatch' hook to dispatch 
     * variable */
    const dispatch = useDispatch()

    return(
        <aside className="modal-container">
            <div className="modal">
                <h4>remove all items from the cart ?</h4>
                <div className="btn-container">
                    <button 
                        type='button' 
                        className="btn confirm-btn"
                        onClick={() => {
                            dispatch(clearCart())
                            dispatch(closeModal())
                        }}
                        >
                        confirm
                    </button>
                    <button 
                        type='button' 
                        className="btn clear-btn"
                        onClick={() => {
                            dispatch(closeModal())
                        }}
                        >
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal;