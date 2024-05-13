import { useState, createContext, useEffect } from "react";
import { comicList } from "../scripts/database";
import { CartList } from "../components/cartModal/styles";






export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [currentID, setCurrentID] = useState();

    const [cartItems, setCartItems] = useState([]);

    const [cartLength, setCartLength] = useState();

    


    const addToCart =  (currentID) => {
        // Encontrar o objeto no comicList com o ID correspondente
        const comicToAdd = comicList.find(comic => comic.id === currentID);

    
        // Verificar se o objeto foi encontrado
        if (comicToAdd) {
            // Adicionar o objeto ao carrinho

            const checkComic = cartItems.find(comic => comic.id === comicToAdd.id)

            if(comicToAdd != checkComic) {
   
                setCartItems([...cartItems, comicToAdd]);
            } console.log("Comic is alredy at the cart");   


        } else {
            console.error(`Não foi possível encontrar um comic com o ID ${currentID}`);
        }
    };


    const removeFromCart = (idToRemove) => {
        
        // Filtrar os itens do carrinho, removendo aquele com o ID correspondente
        const updatedCartItems = cartItems.filter(item => item.id !== idToRemove);
        
        // Atualizar o estado com o novo array de itens
        setCartItems(updatedCartItems);
      };
      


    useEffect(() => {

      setCartLength(cartItems.length)
    //   alert(cartLength)
      

    }, [cartItems])


    return (
        <CartContext.Provider value={{ cartItems, addToCart, currentID, setCurrentID, cartLength, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};
