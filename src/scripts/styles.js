
import styled from "styled-components";
import backgroundImage from "./../assets/back.jpg"

export const Main = styled.main`
    /* padding: 8rem 0rem 0rem 0rem; */
    height: 85vh;
    padding: 15vh 0vh;
    `;




export const HeaderStyle = styled.header`

       height: 15vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 0rem 1rem 0rem 1rem;
    box-sizing: border-box;
    z-index: 1;
    background: white;
    box-shadow: 1px 3px 21px;

    
    img{
        width: 200px;
        height: 150px;
        filter: drop-shadow(1px 0px 0px red);
    }`;


export const ProductListStyle = styled.section`


background-image: url(${backgroundImage});
background-color: rgb(255 249 249 / 70%);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
height: 85vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

/* background-color: white; */
ul{

    list-style: none;
    gap: 3rem;
    height: 60%;
    width: 100vw;
    overflow: scroll;
    display: flex;
    align-items: center;
    // justify-content: center;
    perspective: 400px;
    padding: 0rem 2rem 0rem 2rem;
    box-sizing: border-box;
    // background-image: url(../../assets/backgroundspiderman.png);
    
    li {

        /* position: relative; */
        min-width: 200px;
        min-height: 300px;
        width: 200px;
        height: 350px;
        /* background-color: white; */
        /* box-shadow: 10px 10px 15px; */
        rotate: x 20deg;
        border-radius: 3%;

        /* img:hover{
            border: 1px solid lightgrey;
        } */
        
        span{
            position: absolute;
            width: 70px;
            height: 70px;
            bottom: 62px;
            right: 5px;
            background: red;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            box-shadow: 0px 1px 6px black;
           ;
            
        }
        
       
        
       
    }
 /*     
    li:hover {
       
        border: 2px solid black;
        
        rotate: x 0deg;
    }; */
}
    `



export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    input{
        height: 26px;
         width: 50vw;
         border: 1px solid red;
    border-radius: 27px;
    }
    
  `;


export const BuyButton = styled.button`
  background-color: white;
  border: 1px solid red;
  height: 25px;
  width: 70px;
  color: red;
  border-radius: 10px;

  &:hover {
    background-color: red;
    color: white; // Se quiser mudar a cor do texto também quando hover
  }
`;

export const ComicsCardBtn = styled.div`

height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  
  `;


export const ComicsDiv = styled.div`
            width: 200px;
            height: 300px;
            background: #e9e9e7;
            /* box-shadow: 10px 10px 15px; */
            /* box-shadow:${props => ` 0px 1px 6px ${props.rarity}`}; */
            box-shadow: ${props => props.rarity === 'rare' ? '11px 9px 20px green' : '11px 9px 20px black'};

            div{
                width: 202px;
    height: 302px;
    border-radius: 2%;
    background-color: white;
            
            }

            img {
            width: 200px;
            height: 300px;
            max-width: 100%;
            max-height: 100%;
            border-radius: 2%;
            
        }
            `;


export const CartDiv = styled.div`

    height: 54px;
    display: flex;
    width: 44px;
    align-items: center;
    justify-content: center;
    
    p{
        font-weight: 900;
    top: -11px;
    position: relative;
    right: 18px;
    background: red;
    border-radius: 10px;
    color: white;
    font-family: monospace;
    font-size: 25px;
    }`
    ;


export const RareP = styled.p`
   
   font-family: monospace;
    font-weight: 900;
    background: green;
    width: 35px;
    color: white;
   `;












