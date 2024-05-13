import spiderMan from "./../../assets/spiderman1.jpg"
import spiderGirl from "./../../assets/SpiderGirl.jpg"
import pricetag from "./../../assets/pricetag.png"
import { FaSearch } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useContext, useEffect, useState } from "react";
import { comicList } from "../../scripts/database";
import { marvelApi } from "../../scripts/api";
import { MarvelContext } from "../../context/DatabaseContex";
import { CartContext } from "../../context/CartContext";
import { BuyButton, ComicsCardBtn, ComicsDiv, RareP, SearchDiv } from "./styles";


export const ProductList = () => {

 
    const {setCurrentID } = useContext(CartContext); 
    const { currentID } = useContext(CartContext); 

    // const {addToCart} = useContext(CartContex);
    const {addToCartItem} = useContext(CartContext)

    const {newComicList} = useContext(MarvelContext);

 
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
                    newComicList.map((comic) => (
                        <li key={comic.id}>
                            
                            <span>{`$ ${comic.price}`}</span>

                                {comic.rarity === "rare" ? <RareP>RARE</RareP> : null}
                            <ComicsDiv rarity={comic.rarity}>
                                <div>
                                    <img src={comic.imagem} alt="comic cover" />
                                </div>
                            </ComicsDiv>


                            <ComicsCardBtn onClick={() => setCurrentID(comic.id)}>

                                <BuyButton>Details</BuyButton>
                                <LiaCartPlusSolid size={32} color="red" onClick={() => addToCartItem(comic.id)}/>
                            </ComicsCardBtn>

                        </li>
                    ))
                }
            </ul>
        </>
    )
}