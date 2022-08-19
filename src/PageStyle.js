import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: var(--page-padding);
  min-height: 100vh;

  @media only screen and (min-width: 769px) {
    padding: 120px 80px 0 80px;
    /* min-height: auto; */
  }
`;

export const Content = styled.div`
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
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: 900;
    font-size: 3em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #dee2e6;
    color: white;

    @media only screen and (min-width: 1023px) {
      font-size: 8em;
    }
  }
  .section--title--absolute {
    color: var(--bg-color);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 1.5em;
    font-weight: 900;
    position: absolute;
    bottom: 16px;
    margin: 0 auto;
    left: 0;
    right: 0;
    text-align: center;

    @media only screen and (min-width: 1023px) {
      font-size: 3em;
      width: 100%;
      text-align: center;
      bottom: 54px;
    }
  }
`;
