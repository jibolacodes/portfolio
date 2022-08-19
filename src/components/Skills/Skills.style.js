import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px;
  max-width: 100vw;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 40px;
  }
`;

export const Logo = styled.div`
  width: 100px;
  display: grid;
  place-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: var(--dark-text-color);
  border-radius: 3px;
  padding: 10px;

  img {
    width: 60px;
  }

  .underline {
    width: 20px;
    height: 2px;
    background-color: var(--bg-color);
    margin: 10px;
  }

  p {
    text-align: center;
    text-transform: uppercase;
    font-size: smaller;
    color: var(--white);
  }
`;
