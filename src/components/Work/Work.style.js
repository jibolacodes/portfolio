import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  place-items: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    grid-template-columns: auto auto auto;
  }
`;

export const Image = styled.div`
  position: relative;

  img {
    width: 300px;
    height: 240px;
    border-radius: 5px;

    @media screen and (min-width: 1024px) {
      width: 420px;
      height: 360px;
    }
  }
`;

export const Info = styled.div`
  background-color: var(--bg-color);
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 1024px) {
    padding: 30px;
  }
`;

export const Text = styled.div`
  p {
    color: var(--white);
    font-size: smaller;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media screen and (min-width: 1024px) {
      font-size: 1.1em;
    }
  }
`;

export const Stack = styled.div`
  height: 22px;

  @media screen and (min-width: 1024px) {
    height: 32px;
  }

  img {
    width: 22px;
    height: 22px;
    margin: 0 2px;

    @media screen and (min-width: 1024px) {
      height: 32px;
      width: 32px;
    }
  }
`;
