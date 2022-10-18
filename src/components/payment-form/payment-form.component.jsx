import './payment-form.styles.scss';


import { CardElement } from '@stripe/react-stripe-js';
import Button from '../button/button.component';
import { Fragment } from 'react';



const PaymentForm = () => {
    
    return (
        <Fragment>
            
            <CardElement />           
            <Button buttonType='inverted'>Pay now</Button>
        </Fragment>
    )
}

export default PaymentForm;