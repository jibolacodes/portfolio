import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;

     @media only screen and (min-width: 1024px){
        display: block;
     }

    img {
        width: 100px;
    }
`;

export const Logo= styled.div``;