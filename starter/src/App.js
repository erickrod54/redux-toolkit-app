import Navbar from "./components/Nabvar";
import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

/**React-redux toolkit app - version 10  - App js js - 
 * Features:
 * 
 *      --> Testing 'axios' options combined with 
 *          'asyncThrunk'
 * 
 * Note: I can check how the actions get done in detail 
 * using 'DevTools' > 'Redux' tab
 * 
 * The testing value that im passing throught the 'getCartItems'
 * > 'random' is being passed when the component mounts ( in
 * this case but can be made when the useEffect triggers for
 * some reason that i need )
 */

function App() {

  
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  
  const dispatch = useDispatch() 

  useEffect(() =>{
    dispatch(calculateTotals())
    // eslint-disable-next-line
  },[cartItems]);

  /**using axios i can pass values throught the
   * async and get them direclly in the 'getCartItems'*/
  useEffect(() => {
    dispatch(getCartItems('random'))
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
