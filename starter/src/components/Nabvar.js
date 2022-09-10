import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

/**React-redux toolkit app - version 1  - 'Nabvar' js - 
 * Features:
 * 
 *      --> Destructuring and accessing to 'amount' from 
 *          the 'store'.
 * 
 *      --> Importing and testing a 'Testing' icon that
 *          was build previously in 'icons.js' 
 *          - notice this icons are JSX Components
 *           and highly customizable - 
 * 
 * Note: To destructure the amount from the 'store' i use:
 * 
 *      useSelector((store) => store.cart
 * 
 * 'useSelector' is a redux hook and then i scope the 'store.cart' 
 * if i log it i can check that i can be bale to get the full 
 * state, so i can destructure what i need to use -this case the
 * amount -
 */

//import { Testing } from '../icons';

const Navbar = () => {

    /**to test that actually i'm receiving the
     * whole state*/

    /**console.log(useSelector((store) => {
        console.log(store)
    })) */

    /**1.- first way valid  */

    //const amount = useSelector((store) => store.cart.amount)

     /**2.- second way valid */   

    const { amount } = useSelector((store) => store.cart )

    return(
        <>
        {/**
         * uncomment and test the original icon:
         * 
         *      --> <Testing/>
         */}
        <nav>
            <div className='nav-center'>
                <h3>redux toolkit</h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>
                            {amount}
                        </p>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;