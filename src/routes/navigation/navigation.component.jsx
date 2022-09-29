import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../context/cart.context';

import { UserContext } from '../../context/user.context';

import './navigation.styles.scss';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler =  () => {
        setCurrentUser(null);
    }
    
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to={'/'}>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to={'shop'}>Shop</Link>
                    <Link className='nav-link' to={'contact'}>Contact</Link>
                    {
                        currentUser ? 
                            (<span onClick={signOutHandler} className='nav-link'>Signout</span>): 
                            (<Link className='nav-link' to={'auth'}>Sign in</Link>)
                    }

                    <CartIcon />                    
                </div>
                { isCartOpen && <CartDropdown /> }
            </div>

            <Outlet />            
        </Fragment>
    )

}

export default Navigation;