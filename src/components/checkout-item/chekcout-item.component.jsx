import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(item);
    const addItemHandler = () => addItemToCart(item);
    const removeItemHandler = () => removeItemFromCart(item);

    const {name, price, imageUrl, quantity } = item;
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>
                <div 
                    className='arrow' 
                    onClick={removeItemHandler}>
                        &#10094;</div>
                <span className='value'>{ quantity }</span>
                <div 
                    className='arrow' 
                    onClick={addItemHandler}>
                        &#10095;
                    </div>
            </span>
            <span className='price'>€{price}</span> 

            <div ><span onClick={clearItemFromCart}>&#10005;</span></div>
        </div>
    )
}

export default CheckoutItem;