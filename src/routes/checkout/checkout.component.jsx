import { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutItem from '../../components/checkout-item/chekcout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';

const stripePromise = loadStripe('pk_test_51LRUdWBbn6ngdLfXpHJRQYada4ZMwqnfHTKnbumsokOoUq5ocaa75brVZ1eJpcustfI3D5j7IcSDEqC6J62RMc5700i6SAA9U3');

const Checkout = () => {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'sk_test_51LRUdWBbn6ngdLfXcLXwSQZNothhwSreebDdfxvbM3zkUVl3GmrYgjf4hlMExFzGfRGWPiuZSCjcQgl7xY2KqlI900WJPTrRkU',
      };

    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Proudct</span>
                </div>
                <div className='header-block'>
                    <span>Name</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
        
            </div>

            
            {cartItems.map((item, index) => {
                return (<CheckoutItem key={index} item={item} />)
            })}
            <span className='total'>Total: ${cartTotal}</span>
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </div>
    )

}

export default Checkout;