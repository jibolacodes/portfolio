import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const Content = styled.div`
  background-color: var(--white);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (min-width: 1024px) {
    height: auto;
    box-shadow: none;
  }
`;

export const Logo = styled.div`
  h1 {
    font-family: var(--font-family-absolute);
    text-align: center;
    font-weight: 900;
    font-size: 24px;
    text-transform: uppercase;
    -webkit-text-stroke: 1px var(--bg-color);
    color: var(--white);

    @media only screen and (min-width: 1023px) {
      font-size: 8em;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 32px;
    }
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
  background-color: var(--white);
  width: calc(210px - 30px);
  height: fit-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  ul {
    list-style-type: none;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(6, 80px);

    li {
      padding-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1em;
      cursor: pointer;

      :hover {
        background-color: var(--bg-color);
        font-weight: 600;
      }

      a {
        text-decoration: none;
        text-transform: capitalize;
        color: var(--dark-text-color);
        width: 100%;
        /* With Span */
        height: 100%;
        display: flex;
        align-items: center;
        /* End of width span */

        :hover {
          color: var(--white);
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
    box-shadow: none;

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
          background-color: var(--bg-color);

          a {
            color: var(--white);
          }
        }
      }
    }
  }
`;
