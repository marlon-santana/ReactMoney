import styled from "styled-components";


export const Container = styled.header `

background: ${props => props.theme.colors.blue};

`

export const SwitchBotom = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction: row;



` 

export const Content = styled.div `

max-width: 1120px;
 margin: 0 auto ;

 padding: 2rem 1rem 10rem ;
 display: flex;
 align-items: center;
 justify-content: space-between;

 button {
     margin-left: 10px;
     font-size:  1rem;
     color: #fff ;
     background: var(--blue-light);
     border: 0;
     padding: 0 2rem;
     border-radius: 0.25rem;
     height: 3rem;
     transition: filter 0.2s;

     &:hover {
         filter: brightness(0.9) ;
     }

 }
`