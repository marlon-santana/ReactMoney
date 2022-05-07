import { FormEvent, useState } from 'react';

import { Link } from "react-router-dom";
import  LogoImg  from "../assets/logo.svg";
import { Container, Content, WrapperContainer,FormContainer } from "./styles";
import { motion } from "framer-motion";




function FormDefault (event: FormEvent) {
    event.preventDefault();
}

interface SocialProps {
    user: string,
    err: string,
}
const handleSocialLogin = (user : SocialProps , err : SocialProps) => {
    console.log(user);
    console.log(err);
  };


export function Home() { 

    return (
  
        <WrapperContainer>
       <Container>
        <Content> 
       
        <img  src={LogoImg}  alt="rocketmoney"  /> 
        
        </Content>

        
        <FormContainer>
        <form onSubmit={() => FormDefault}>
            <h3>Bem vindo(a)</h3>
            <input placeholder="login"/>
            <input type= 'password' placeholder="senha"/>
            <Link to= '*'> <button>ENTRAR</button></Link>
          
        </form>
        
        <a>Cadastrar senha</a>
        </FormContainer>
        </Container>
        
            
            
        </WrapperContainer>
      
      
        

    )
     
}

