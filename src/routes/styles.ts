import styled from "styled-components";


export const Container = styled.div `
margin: 0 auto;
width: 100%;
height: 14rem;
background: #5429cc;

`

export  const WrapperContainer = styled.div`

width:1280px;
height:600px;
background: #f0f2f5;
box-shadow: inset 0 0 1em black;

`

export const FormContainer = styled.div`
margin:0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:white ;
width: 400px;
height: 300px;
margin-top: -140px;
border-radius: 0.5rem;


input {
     display: flex ;
     flex-direction: column;
     padding: 2px;
     margin-top: 3px;
     width: 370px;
    padding: 0 1.5rem;
    height: 2.5rem;
    border: 1px solid #d7d7d7;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem
    }
 }

 h3 {
   margin-left: 110px;
 }

 button {
    width: 370px;
    padding: 0 1.5rem;
    height: 2.5rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;
    &:hover {
      filter: brightness(0.9);
    }
 }

`





export const Content = styled.div `

max-width: 1120px;
 margin: 0 auto ;

 padding: 2rem 1rem 10rem ;
 display: flex;
 align-items: center;
 justify-content: space-between;


 img {
   
     margin-top: 50px;
 }


 
`