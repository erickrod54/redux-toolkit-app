import React from "react";

/**React-redux toolkit app - version 7  - Modal js - 
 * Features:
 * 
 *      --> Building the 'Modal' js Component
 * 
 * Note: this component will render a modal with two
 * options to confirm to clear the data
 */

const Modal = () => {

    return(
        <aside className="modal-container">
            <div className="modal">
                <h4>remove all items from the cart ?</h4>
                <div className="btn-container">
                    <button type='button' className="btn confirm-btn">
                        confirm
                    </button>
                    <button type='button' className="btn clear-btn">
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal;