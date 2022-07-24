import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;

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
    /* font-family: 'Cormorant SC', serif; */
    font-family: 'Neonderthaw', cursive;
    letter-spacing: 4px;;
  }


`;

export const NavToggle = styled.div`
  img {
    width: 30px;
  }
  width: fit-content;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavLinks = styled.nav`
  background-color: white;
  width: fit-content;
  /* padding: 40px 10% 0 20px; */
  /* padding: 40px 0; */
  width: 25%;

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
      /* background-color: #FF9D19; */

      :hover {
        background-color: #FF9D19;
      }
      
       a {
        text-decoration: none;
        text-transform: capitalize;
        color: #272422;
        /* font-family: 'Cormorant SC', serif; */
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
          background-color: #FF9D19;

          a {
            color: white;
          }
        }
      }
    }
  }
`;
