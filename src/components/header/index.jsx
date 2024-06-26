import { useContext } from "react";
import logo from "./../../assets/logo4.png"
import { BiAlignMiddle } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
import { CartDiv, HeaderStyle } from "./styles";


export const Header = ({handleOpenCart}) => {

    const {cartLength} = useContext(CartContext);

    return (
        <>
            <HeaderStyle>

                <BiAlignMiddle size={32} />
                <img src={logo} alt="" />

                <CartDiv onClick={handleOpenCart}>
                <RiShoppingCart2Line size={32} onClick={handleOpenCart}/>
                    <p>{cartLength}</p>
                </CartDiv>


            </HeaderStyle>
        </>
    )
}