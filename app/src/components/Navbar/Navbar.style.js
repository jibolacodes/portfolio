import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  padding: 40px 20px;
  background-color: white;
  width: 100%;
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 240px;
  height: 80px;
`;

export const NavToggle = styled.div`
  img {
    width: 50px;
  }
  width: fit-content;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavLinks = styled.nav`
  @media screen and (min-width: 1024px) {
    ul {
      width: 600px;
      display: flex;
      justify-content: space-around;
    }
  }
`;
