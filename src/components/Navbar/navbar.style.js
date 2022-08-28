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
    font-family: var(--font-family);
    text-align: center;
    font-weight: 900;
    font-size: 1.6em;
    text-transform: uppercase;
    -webkit-text-stroke: 2px var(--bg-color);
    color: var(--white);

    @media only screen and (min-width: 1023px) {
      font-size: 8em;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 2.5em;
    }
  }
`;

export const NavToggle = styled.div`
  width: fit-content;
  .toggle-btn {
    width: 30px;
    height: 30px;
    color: var(--bg-color);
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavLinks = styled.nav`
  background-color: var(--white);
  /* width: calc(210px - 30px); */
  width: 55%;
  height: fit-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (min-width: 426px) and (max-width: 1023px) {
    /* width: 30%; */
  }

  ul {
    list-style-type: none;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(7, 80px);

    li {
      padding-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .icon {
        color: var(--bg-color);
        margin-right: 20px;

        @media screen and (min-width: 1024px) {
          display: none;
        }
      }

      :hover {
        background-color: var(--bg-color);
        font-weight: 600;

        .icon {
          color: var(--white);
        }
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
