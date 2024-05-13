import styled from "styled-components";

export const RotateCard = styled.div`
    min-width: 200px;
    min-height: 300px;
    width: 200px;
    height: 350px;
    rotate: x 20deg;
    border-radius: 3%;
`;

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

export const RareP = styled.p`
   
   font-family: monospace;
    font-weight: 900;
    background: green;
    width: 35px;
    color: white;
   `;