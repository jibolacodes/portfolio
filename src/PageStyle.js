import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: var(--page-padding);
  /* min-height: 100vh; */

  @media only screen and (min-width: 769px) {
    padding: 120px 80px 60px 80px;
    min-height: auto;
  }
`;

export const Content = styled.div`
  /* For message notice */
  position: relative;
  /* ... */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .flex__container {
    display: grid;
  }

  @media only screen and (min-width: 1023px) {
    .flex__container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Title = styled.section`
  position: relative;
  margin-bottom: 24px;

  .section--title {
    font-family: var(--font-family);
    text-align: center;
    font-weight: 900;
    font-size: 2.8em;
    text-transform: uppercase;
    -webkit-text-stroke: 2px var(--grey-text-color);
    color: var(--bg-color);
    letter-spacing: 1px;

    @media only screen and (min-width: 1023px) {
      font-size: 5em;
    }
  }
  .section--title--absolute {
    color: var(--bg-color);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 1.8em;
    font-weight: 900;
    position: absolute;
    bottom: 22px;
    margin: auto;
    left: 10px;
    right: 0;
    text-align: center;
    display: none;

    @media only screen and (min-width: 1023px) {
      font-size: 3em;
      width: 100%;
      text-align: center;
      bottom: 54px;
    }
  }
`;
