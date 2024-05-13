import { MdClose } from "react-icons/md";
import { CartHeader, CartList, CloseButton, ComicItem, CupomDiv, ModalContent, ModalOverlay, TotalDiv } from "./styles";
import { comicList } from "../../scripts/database";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";



export const CartModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;


    const {cartItems} = useContext(CartContext);
    
    const {removeFromCart} = useContext(CartContext);


    // useEffect(() => {


    // },)
    


    const handleRemove = (comic) => {
    

    }

    return (


        <ModalOverlay>
            <ModalContent>

                <CartHeader>
                    <h2>Cart List </h2>
                    <CloseButton onClick={onClose}>X</CloseButton>
                </CartHeader>

                <CartList>

                    {
                        cartItems.map((comic) => (
                            <li key={comic.id}>
                                <ComicItem rarity={comic.rarity}>
                                    <img src={comic.imagem} alt="comic cover" />
                                </ComicItem>

                            <div>
                                <p>{`$ ${comic.price}`}</p>
                            </div>

                                <div>
                                    <p>QTY</p>
                                    <input type="number" />
                                    <MdDelete size={20} color="black" onClick={() => removeFromCart(comic.id)}/>
                                </div>

                            </li>
                        ))
                    }
                </CartList>
                    <CupomDiv>
                        <p>Discount Cupon</p>
                        <div>
                        <input type="text" />
                        <button>OK</button>

                        </div>
                    </CupomDiv>
                    <TotalDiv>
                        <p>Total: R${}</p>
                        <button>Checkout</button>
                    </TotalDiv>

            </ModalContent>
        </ModalOverlay>
    )
};
