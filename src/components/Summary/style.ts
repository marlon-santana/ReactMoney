import styled from "styled-components";


export const Container = styled.div `

display: grid ;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin-top: -10rem ;

div {
    background:  ${props => props.theme.colors.sumary};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color:   ${props => props.theme.colors.texttitle};//var(--text-title);


    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
        display: block;
        color: ${props => props.theme.colors.texttitle};
    }

    &.hightlight-background {
        background: ${props => props.theme.colors.total};
        color: #fff;
    }
}

`