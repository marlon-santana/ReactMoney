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
        padding: 10px 10px;
        border: 0;
        background: ${props => props.theme.colors.sumary};
        color: ${props => props.theme.colors.text};
        border-radius: 5px;

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
       

        .Delete {
            color: #e52e4d;
            width: 20px;
            height: 20px;
             &:hover {
                 cursor: pointer;
                 opacity: 0.6;
             }
             
        }
    }
}

`