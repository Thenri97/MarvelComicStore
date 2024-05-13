import spiderMan from "./../../assets/spiderman1.jpg"
import spiderGirl from "./../../assets/SpiderGirl.jpg"
import pricetag from "./../../assets/pricetag.png"
import { FaSearch } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { BuyButton, ComicsCardBtn, ComicsDiv, RareP, SearchDiv } from "../../scripts/styles";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { comicList } from "../../scripts/database";


export const ProductList = () => {

 
    const { currentID, setCurrentID } = useContext(CartContext);

    const {addToCart} = useContext(CartContext);

 
    useEffect(() => {
        console.log(currentID)

    },[currentID])



    return (
        <>

            <SearchDiv>

                <input type="text" />
                <FaSearch size={32} color="red" />
            </SearchDiv>

            <ul>

                {
                    comicList.map((comic) => (
                        <li key={comic.id}>
                            
                            <span>{`$ ${comic.price}`}</span>

                                {comic.rarity === "rare" ? <RareP>RARE</RareP> : null}
                            <ComicsDiv rarity={comic.rarity}>
                                <div>
                                    <img src={comic.imagem} alt="comic cover" />
                                </div>
                            </ComicsDiv>


                            <ComicsCardBtn  onClick={() => setCurrentID(comic.id)}>

                                <BuyButton>BUY</BuyButton>
                                <LiaCartPlusSolid size={32} color="red" onClick={() => addToCart(currentID)}/>
                            </ComicsCardBtn>

                        </li>
                    ))
                }
            </ul>
        </>
    )
}