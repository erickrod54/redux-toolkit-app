import Navbar from "./components/Nabvar";
import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

/**React-redux toolkit app - version 9  - App js js - 
 * Features:
 * 
 *      --> Destructuring 'isLoading' state from the 
 *          'store.cart'.
 * 
 *      --> Building a second 'useEffect' in order to
 *          dispatch the 'getCartItems' actions once 
 *          the 'App' mounts
 * 
 * Note: I can check how the actions get done in detail 
 * using 'DevTools' > 'Redux' tab
 * 
 */

function App() {

  
  const { cartItems, isLoading } = useSelector((store) => store.cart)

  /**here i destructure 'isOpen' from the store*/
  const { isOpen } = useSelector((store) => store.modal)
  
  const dispatch = useDispatch() 

  /**here i trigger the 'calculateTotals' depending on
   * the 'cartItems' existence */
  useEffect(() =>{
    dispatch(calculateTotals())
    // eslint-disable-next-line
  },[cartItems]);

  useEffect(() => {
    dispatch(getCartItems())
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }

  return(
    <main>
      {isOpen && <Modal /> }
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
