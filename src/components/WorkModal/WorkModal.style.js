import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: white;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .closeBtn {
    align-self: flex-end;
    width: 30px;
    height: 30px;
    color: var(--white);
    background-color: var(--bg-color);
    border-radius: 50%;

    @media screen and (min-width: 1024px) {
      margin-bottom: 20px;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto;
  height: 320px;
  width: 300px;
  position: relative;

  @media screen and (min-width: 1024px) {
    height: 600px;
    width: 660px;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 5px;
    border: 2px solid var(--white);

    @media screen and (min-width: 1024px) {
      height: 600px;
      width: 660px;
    }
  }

  .arrow-left,
  .arrow-right {
    width: 40px;
    height: 40px;
    color: var(--dark-text-color);
    background-color: var(--white);
    border-radius: 50%;
    position: absolute;
  }

  .arrow-right {
    right: 0;
  }
`;

export const Images = styled.div``;
