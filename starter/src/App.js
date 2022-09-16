import Navbar from "./components/Nabvar";
import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

/**React-redux toolkit app - version 8  - App js js - 
 * Features:
 * 
 *      --> Destructuring 'isOpen' from 'store.modal'.
 * 
 *      -->Implementing useEffect to dispatch 
 *        'calculateTotals' when App mounts depending
 *          on the 'cartItems'.
 * 
 *      --> Using shortcircuit operator to render 
 *          'Modal' Component.
 * 
 * Note: the complete fujnctionality will be set in next
 * versions
 */

function App() {

  
  const { cartItems } = useSelector((store) => store.cart)

  /**here i destructure 'isOpen' from the store*/
  const { isOpen } = useSelector((store) => store.modal)
  
  const dispatch = useDispatch() 

  /**here i trigger the 'calculateTotals' depending on
   * the 'cartItems' existence */
  useEffect(() =>{
    dispatch(calculateTotals())
    // eslint-disable-next-line
  },[cartItems]);

  return(
    <main>
      {isOpen && <Modal /> }
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
