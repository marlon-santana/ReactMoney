import styled from "styled-components";


export const Container = styled.div `

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

margin-top: 4rem;

table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
       

    }
   
    td {
        padding: 1rem 2rem;
        border: 0;
        background: ${props => props.theme.colors.sumary};
        color: ${props => props.theme.colors.text};///////////////////////////////////
        border-radius: 0.25rem;

        &:first-child {
            color: ${props => props.theme.colors.text}
        }
        &.deposit {
            font-weight: 600;
            color:  ${props => props.theme.colors.deposit}
        }
        &.withdraw {
            font-weight: 600;
            color: ${props => props.theme.colors.withdraw}
           
        }
       

        img {
            width: 15px;
            height: 15px;
             &:hover {
                 cursor: pointer;
                 opacity: 0.6;
             }
             
        }
    }
}

`