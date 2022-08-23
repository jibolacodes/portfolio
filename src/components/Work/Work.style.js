import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  place-items: center;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: auto auto;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export const Image = styled.div`
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 0.3s;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  img {
    width: 335px;
    height: 270px;
    border-radius: 5px;

    @media screen and (max-width: 374px) {
      width: 300px;
    }
  }
`;

export const Info = styled.div`
  background-color: var(--white);
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
`;

export const Text = styled.div`
  p {
    color: var(--dark-text-color);
    font-size: smaller;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export const Stack = styled.div`
  height: 22px;

  img {
    width: 22px;
    height: 22px;
    margin: 0 2px;
  }
`;
