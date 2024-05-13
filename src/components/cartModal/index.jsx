import { MdClose } from "react-icons/md";
import { CartHeader, CartList, CloseButton, ComicItem, CupomDiv, ModalContent, ModalOverlay, TotalDiv } from "./styles";
import { comicList } from "../../scripts/database";
import { MdDelete } from "react-icons/md";



export const CartModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;




    return (


        <ModalOverlay>
            <ModalContent>

                <CartHeader>
                    <h2>Cart List </h2>
                    <CloseButton onClick={onClose}>X</CloseButton>
                </CartHeader>

                <CartList>

                    {
                        comicList.map((comic) => (
                            <li key={comic.id}>
                                <ComicItem>
                                    <img src={comic.imagem} alt="comic cover" />
                                </ComicItem>


                                <div>
                                    <input type="text" />
                                    <MdDelete size={20} color="black" />
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
