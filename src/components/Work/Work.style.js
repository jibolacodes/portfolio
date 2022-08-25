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

  .img {
    width: 335px;
    height: 180px;
    background: var(--white);

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;

      border-radius: 5px;
      object-fit: contain;
    }

    @media screen and (max-width: 374px) {
      width: 300px;
    }
  }
`;

export const Button = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;

  .btn {
    color: var(--white);
    background-color: var(--bg-color);
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    .icon {
      font-weight: 800;
    }

    :hover {
      border: 1px solid var(--bg-color);
      background-color: var(--white);
      color: var(--bg-color);
    }
  }


`;

export const Info = styled.div`
  background-color: var(--dark-text-color);
  width: 100%;
  height: auto;
  /* position: absolute; */
  /* bottom: 0; */
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Text = styled.div`
  p {
    color: var(--white);
    font-size: smaller;
    font-weight: 600;
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
