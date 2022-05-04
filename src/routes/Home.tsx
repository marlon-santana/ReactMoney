import { Link } from "react-router-dom";
import  { GlobalStyle } from '../styles/global';
import Img from "../assets/fundo.jpg"




export function Home() {
    return (
  
    
    <>
        <Link to= '/'>App</Link>
        <img src={Img} />
        <GlobalStyle />
        
     </>
    )
     
}

