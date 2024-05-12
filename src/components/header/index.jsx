import { HeaderStyle } from "../../scripts/styles";
import logo from "./../../assets/logo4.png"
import { BiAlignMiddle } from "react-icons/bi";
import { IoIosCart } from "react-icons/io";

export const Header = () => {

    return (
        <>
            <HeaderStyle>

                <BiAlignMiddle size={32} />
                <img src={logo} alt="" />
                <IoIosCart size={32}  />

            </HeaderStyle>
        </>
    )
}