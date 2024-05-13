
import styled from "styled-components";
import backgroundImage from "./../assets/back.jpg"



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

    
}`

export const PagesDiv = styled.div`

color:red;
font-size: 17px;
gap: 1rem;
display: flex;
font-family: monospace;
font-weight: 900;

`;













