import spiderMan from "./../../assets/spiderman1.jpg"
import spiderGirl from "./../../assets/SpiderGirl.jpg"
import pricetag from "./../../assets/pricetag.png"
import { FaSearch } from "react-icons/fa";
import { SearchDiv } from "../../scripts/styles";


export const ProductList = () => {

    const comicList = [{
        imagem: "https://i.annihil.us/u/prod/marvel/i/mg/0/03/66212c332b665.jpg",
        id: 1

    }, {
        imagem: "https://i.annihil.us/u/prod/marvel/i/mg/a/30/56f46483efc4f.jpg",
        id: 2
    },
    {
        imagem: "https://i.annihil.us/u/prod/marvel/i/mg/5/70/66212c2b2c71a.jpg",
        id: 3
    },
    {
        imagem: "https://i.annihil.us/u/prod/marvel/i/mg/7/20/6638ef6da2288.jpg",
        id: 4
    },
    {
        imagem: "https://i.annihil.us/u/prod/marvel/i/mg/3/00/66212b10594ed.jpg",
        id: 5
    }, {
        imagem: "https://i.annihil.us/u/prod/marvel/i/mg/3/00/66212b10594ed.jpg",
        id: 6
    },];

    return (
        <>
            {/* <div> */}

            <SearchDiv>

                <input type="text" />
                <FaSearch size={32} />
            </SearchDiv>


            {/* </div> */}
            <ul>

                {
                    comicList.map((comic) => (
                        <li key={comic.id}>
                            <span>R$ 19,99</span>
                            <div>
                                <img src={comic.imagem} alt="" />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}