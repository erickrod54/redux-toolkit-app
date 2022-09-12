import Navbar from "./components/Nabvar";
import CartContainer from "./components/CartContainer";


/**React-redux toolkit app - version 2  - App js js - 
 * Features:
 * 
 *      --> Importing and placing 'CartContainer' Component
 *          in order to display it.
 * 
 * Note: Setting amount value will display the CartContainer
 * reference to CarContainer code.
 */

function App() {
  return(
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
