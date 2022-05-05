import { FormEvent } from 'react';

import { Link } from "react-router-dom";
import  LogoImg  from "../assets/logo.svg";
import { Container, Content, WrapperContainer,FormContainer } from "./styles";


function FormDefault (event: FormEvent) {
    event.preventDefault();
}


export function Home() {
    return (
  
        <WrapperContainer>
       <Container>
        <Content> 
        <Link to= '/'>voltar</Link>
        <img  src={LogoImg}  alt="rocketmoney"  /> 
        </Content>
        <FormContainer>
        <form onSubmit={() => FormDefault}>
            <h3>Bem vindo(a)</h3>
            <input placeholder="login"/>
            <input placeholder="senha"/>
            <Link to= '/'> <button>ENTRAR</button></Link>
        </form>
        </FormContainer>
      
        </Container>
        </WrapperContainer>
      
      
        

    )
     
}

