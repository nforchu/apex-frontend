import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const foundItem = cartItems.find(
        (item) => item.id === productToAdd.id
    );

    if (foundItem) {
        return cartItems.map((ci) => 
        ci.id === productToAdd.id ? {...ci, quantity: ci.quantity + 1 } : ci);
    } 

    return [...cartItems, { ...productToAdd, quantity: 1} ];
}

const removeCartItem = (cartItems, productToRemve) => {
    const foundItem = cartItems.find(
        (item) => item.id === productToRemve.id
    );
 
    if (foundItem.quantity > 1) {
        return cartItems.map((ci) => 
        ci.id === productToRemve.id ? {...ci, quantity: ci.quantity - 1 } : ci);
    } 
    return cartItems;
}

const clearCartItem = (cartItems, productToClear) => {
    if  (window.confirm(`${productToClear.name} will be deleted from your cart.`)) {
        return cartItems.filter(item => item.id !== productToClear.id);       
    } 
    return cartItems;
}

export const CartContext = createContext({
    isCartOpen: false, 
    setIsCartOpen: () => false,
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) =>total + cartItem.quantity * cartItem.price, 0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    }

    const value =  { 
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart, 
        removeItemFromCart ,
        clearItemFromCart,
        cartTotal
    };
    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
}