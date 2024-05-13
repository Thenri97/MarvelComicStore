
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* garantir que esteja acima de outros elementos */
`;



export const ModalContent = styled.div`
 border-radius: 10px;
    background-color: white;
    max-width: 400px;
    width: 100%;
    height: 70vh;
    
`;



export const CartHeader = styled.div`

border-radius: 10px 10px 0px 0px;
justify-content: space-between;
display: flex;
align-items: center;
padding: 0.5rem;

background-color: black;
color: white;
height: 10%;
font-size: 25px;

button{

    color:white;
}
`;


export const CloseButton = styled.button`

    background: none;
    font-size: 32px;
    border: none;
    cursor: pointer;
`;



export const CartList = styled.ul`
display: flex;
flex-direction:column;
overflow:scroll;
gap: 0.5rem;
height: 60%;

li{
    gap: 0.5rem;
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    background: #e7e6e6;

    div{
        width: 133px;
        justify-content: flex-end;
     display: flex;
    }

 

  input{
    width: 20px;
  }
 }
    
    `;


export const ComicItem = styled.div`


width: 73px !important;
height: 95px;
box-shadow: ${props => props.rarity === 'rare' ? '3px 4px 11px green' : '3px 4px 11px black'};

img{
    height: 93px;
    width: 71px;

}`;


export const CupomDiv = styled.div`
height: 8vh;
    display: flex;
    border: 1px solid;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    div{
        display: flex;
        gap: 0.5rem;

        input{
            height: 25px;
        }
    
    button{
        height: 30px;
    }    ;
    }
`;


export const TotalDiv = styled.div`

height: 11vh;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 32px;
    }

button{
    height: 6vh;
    width: 100px;
}

`;
