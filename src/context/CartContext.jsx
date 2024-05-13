import { useState, createContext, useEffect, useContext } from "react";
import { comicList } from "../scripts/database";
import { CartList } from "../components/cartModal/styles";
import { MarvelContext } from "./DatabaseContex";






export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [currentID, setCurrentID] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartLength, setCartLength] = useState();
    const [discount, setDiscount] = useState("");

    const {newComicList} = useContext(MarvelContext);



    const addToCartItem = (currentID) => {
        // Encontrar o objeto no comicList com o ID correspondente
        const comicToAdd = newComicList.find(comic => comic.id === currentID);



        // Verificar se o objeto foi encontrado
        if (comicToAdd) {
            // Adicionar o objeto ao carrinho

            const checkComic = cartItems.find(comic => comic.id === comicToAdd.id)

            if (comicToAdd != checkComic) {

                setCartItems([...cartItems, comicToAdd]);
            } console.log("Comic is alredy at the cart");


        } else {
            console.error(`Não foi possível encontrar um comic com o ID ${currentID}`);
        }
    };


    const removeFromCart = (idToRemove) => {

        // Filtrar os itens do carrinho, removendo aquele com o ID correspondente
        const updatedCartItems = cartItems.filter(item => item.id !== idToRemove);

        setCartItems(updatedCartItems);

    };


    const cartTotal = (discountType = null) => {
        // Verifique se o carrinho está vazio
        if (cartItems.length === 0) {
            return 0; // Se estiver vazio, o total é zero
        }

        // Use o método reduce para somar os preços de todos os itens no carrinho
        const total = cartItems.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price;
        }, 0);

        // Aplicar desconto se um tipo de desconto for especificado
        if (discountType === "RARECOMICS20%") {
            return total * 0.8; // Aplica 20% de desconto para "rareDiscount"
        } else if (discountType === "COMMON15%") {
            return total * 0.85; // Aplica 15% de desconto para "commonDiscount"
        }

        return total; // Retorna o total sem desconto se nenhum tipo de desconto for especificado
    };


    useEffect(() => {

        setCartLength(cartItems.length)
        //   alert(cartLength)


    }, [cartItems])

    const handleDiscount = (inputValue) => {

        const rareComic = cartItems.find(comic => comic.rarity === "rare")

        if(inputValue === "RARECOMICS20%" && rareComic){
            setDiscount(inputValue)
        }else if(inputValue === "COMMON15%") {
            setDiscount(inputValue)

        }else{
            console.log("Add a rare comic to the cart to use the Rare discount cupon");
        }
    }


    return (
        <CartContext.Provider value={{ cartItems, currentID, setCurrentID
        , cartLength, removeFromCart, cartTotal, discount, setDiscount, handleDiscount,addToCartItem }}>
            {children}
        </CartContext.Provider>
    );
};
