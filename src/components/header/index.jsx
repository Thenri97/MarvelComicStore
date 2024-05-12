import { CartDiv, HeaderStyle } from "../../scripts/styles";
import logo from "./../../assets/logo4.png"
import { BiAlignMiddle } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";


export const Header = () => {

    return (
        <>
            <HeaderStyle>

                <BiAlignMiddle size={32} />
                <img src={logo} alt="" />

                <CartDiv>
                <RiShoppingCart2Line size={32} />
                    <p>1 </p>
                </CartDiv>


            </HeaderStyle>
        </>
    )
}