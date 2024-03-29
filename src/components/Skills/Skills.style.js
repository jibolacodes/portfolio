import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 20px;
  max-width: 100%;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
  }
`;

export const Logo = styled.div`
  width: 110px;
  height: 110px;
  display: grid;
  place-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: var(--white);
  border-radius: 3px;
  padding: 10px;

  img {
    width: 40px;
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
    color: var(--dark-text-color);
    font-weight: 500;
  }
`;

export const Filters = styled.div`
  margin-bottom: 30px;

  .filter-btn {
    margin: 0 4px;
    /* padding: 10px; */
    height: 40px;
    width: 100px;
    @media only screen and (max-width: 320px) {
      padding: 5px;
      width: auto;
    }
    
    background: var(--bg-color);
    border: none;
    border-radius: 5px;
    color: var(--white);
    font-family: var(--font-family);
    cursor: pointer;
    text-transform: uppercase;
    

    :hover {
      background: var(--white);
      color: var(--bg-color);
      border: 1px solid var(--bg-color);
    }

    @media only screen and (min-width: 1024px) {
      margin: 0 10px;
    }

  }
`;
