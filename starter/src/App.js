import Navbar from "./components/Nabvar";
import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from "./features/cart/cartSlice";

/**React-redux toolkit app - version 6  - App js js - 
 * Features:
 * 
 *      --> Destructuring 'cartItems' from the 'store'.
 * 
 *      --> Dispatching 'calculateTotals' render the 
 *          totals when the app mounts.
 * 
 * Note: Setting amount value will display the CartContainer
 * reference to CarContainer code.
 */

function App() {

  /**here i destructure cartItems */
  const { cartItems } = useSelector((store) => store.cart)

  /**here i assign the 'dispatch' hook */
  const dispatch = useDispatch() 

  /**here i trigger the 'calculateTotals' depending on
   * the 'cartItems' existence */
  useEffect(() =>{
    dispatch(calculateTotals())
    // eslint-disable-next-line
  },[cartItems]);

  return(
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
