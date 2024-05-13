import { MdClose } from "react-icons/md";
import { CartHeader, CartList, CloseButton, ComicItem, CupomDiv, ModalContent, ModalOverlay, TotalDiv } from "./styles";
import { comicList } from "../../scripts/database";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";



export const CartModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const { cartItems } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);
    const { cartTotal } = useContext(CartContext);
    const [total, setTotal] = useState(cartTotal());
    const { discount } = useContext(CartContext);
    const { setDiscount } = useContext(CartContext);
    const { handleDiscount } = useContext(CartContext);


    useEffect(() => {


        const rareDiscount = "RARECOMICS20%";
        const commonDiscount = "COMMON15%";

        const rareComic = cartItems.find(comic => comic.rarity === "rare")
        const commonComic = cartItems.find(comic => comic.rarity === "commun")


        if (discount === rareDiscount && rareComic) {

            setTotal(cartTotal(rareDiscount))
            console.log(" RARECOMICS20% cupom applied");

        } else if (discount === commonDiscount && commonComic ) {
            setTotal(cartTotal(commonDiscount))
        } else {
            setTotal(cartTotal())
        }
        

        handleDiscount(inputValue)

    }, [removeFromCart])


    useEffect(() => {
        // Verificar se o carrinho contém uma comic rara
        const hasRareComic = cartItems.some(item => item.rarity === "rare");

        // Se não houver comic rara, remover o desconto
        if (!hasRareComic && discount > 0) {
            setDiscount(0);
        }
    }, [cartItems]);



    const [inputValue, setInputValue] = useState("");

    const handleChangeInput = (event) => {
        setInputValue(event.target.value.toUpperCase());
        console.log(discount);
    };
;
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
                                {/* <p>QTY</p>
                                <input type="number" /> */}
                                <MdDelete size={20} color="black" onClick={() => removeFromCart(comic.id)} />
                            </div>

                        </li>
                    ))
                }
            </CartList>
            <CupomDiv>
                <p>Discount Cupon</p>
                <div>
                    <input t
                        type="text"
                        value={inputValue}
                        onChange={handleChangeInput}
                    />
                    <button onClick={() => handleDiscount(inputValue)}>OK</button>

                </div>
            </CupomDiv>
            <TotalDiv>
                <p>Total: R${total}</p>
                <button>Checkout</button>
            </TotalDiv>

        </ModalContent>
    </ModalOverlay>
)
};
