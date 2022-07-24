import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
  }
`;

export const Content = styled.div`
  background-color: white;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    height: fit-content;
  }
`;

export const Logo = styled.div`
  h1 {
    font-family: "Neonderthaw", cursive;
    letter-spacing: 4px;
  }
`;

export const NavToggle = styled.div`
  width: fit-content;
  img {
    width: 30px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavLinks = styled.nav`
  background-color: white;
  width: 40%;
  height: 100vh;
  border-top: 2px solid #fe3a7d;

  ul {
    list-style-type: none;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(6, 80px);

    li {
      padding-left: 20px;
      font-size: 1.1em;
      display: flex;
      align-items: center;

      :hover {
        background-color: #ff9d19;
      }

      a {
        text-decoration: none;
        text-transform: capitalize;
        color: #272422;

        :hover {
          color: white;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: inherit;
    margin: auto 0;
    padding: 0;
    border-top: none;
    width: fit-content;

    ul {
      width: 600px;
      display: flex;
      justify-content: space-around;
      height: 100px;

      li {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;

        :hover {
          background-color: #ff9d19;

          a {
            color: white;
          }
        }
      }
    }
  }
`;
