import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: var(--padding);
  h1 {
    font-family: Josefin Sans;
    color: #272422;
    text-align: center;
  }
  `;

export const Content = styled.div`
  margin-top: 3rem;
  
  
  @media only screen and (min-width: 1023px) {
      width: 700px;
      display: grid;
      place-items: center;
      grid-template-columns: auto auto;
  }
`;

export const Hero = styled.img`
  width: 240px;
`;

export const Description = styled.div``;
