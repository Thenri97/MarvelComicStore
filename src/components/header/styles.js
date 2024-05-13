import styled from "styled-components";

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
    }`;
