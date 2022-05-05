import { Link } from "react-router-dom";


import  LogoImg  from "../assets/logo.svg";
import { Container, Content, WrapperContainer } from "./styles";





export function Home() {
    return (
  
        <WrapperContainer>
       <Container>
        <Content> 
        <Link to= '/'>voltar</Link>
        <img  src={LogoImg}  alt="rocketmoney"  /> 
      
        <form>
            <input placeholder="login"/>
            <input placeholder="senha"/>
        </form>
        </Content>
        </Container>
        </WrapperContainer>
      
      
        

    )
     
}

