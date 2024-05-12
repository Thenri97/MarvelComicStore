import styled from "styled-components";


export const Main = styled.main`
    padding: 8rem 0rem 0rem 0rem;`




export const HeaderStyle = styled.header`
    position: relative;
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
    
    img{
        width: 200px;
        height: 200px;
        filter: drop-shadow(1px 0px 0px red);
    };`;


export const ProductListStyle = styled.section`

padding: 1rem 1rem;
height: 82vh;
display: flex;
flex-direction: column;
align-items: center;

background-color: gold;
ul{

    list-style: none;
    gap: 3rem;
    height: 100%;
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
        min-width: 200px;
        min-height: 300px;
        width: 200px;
        height: 300px;
        background-color: white;
        box-shadow: 10px 10px 15px;
        rotate: x 20deg;
        border-radius: 3%;
        
        span{
            position: absolute;
            width: 70px;
            height: 70px;
            bottom: 5px;
            right: 5px;
            background: red;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            box-shadow: 0px 1px 6px black;
        }
        
        img {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            border-radius: 2%;
            
        }
        
        div {
            width: 99%;
            height: 99.5%;
            background: #e9e9e7;
            
            
        }
    }
    
    li:hover {
        // transform: rotate(0deg);
        
        rotate: x 0deg;
    };
}
    `

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    input{
        height: 26px;
         width: 50vw;
    }
    
  `;