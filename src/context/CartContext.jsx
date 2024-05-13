import { useState, createContext } from "react";



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const [currentID, setCurrentID] = useState(); 


    return (
        <CartContext.Provider value={{ cartItems, addToCart, currentID, setCurrentID }}>
            {children}
        </CartContext.Provider>
    );
};
