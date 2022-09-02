import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--bg-color);
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  text-align: center;

  @media only screen and (min-width: 1023px) {
    padding: 0;
    text-align: start;
    width: 970px;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
  }
`;

export const UserImg = styled.img`
  width: 180px;
  clip-path: circle();

  @media only screen and (min-width: 1023px) {
    width: 300px;
  }
`;

export const Info = styled.div`
  padding: 10px;
  border-radius: 10px;

  @media only screen and (min-width: 767px) {
    padding: 30px;
    border-radius: 30px;
  }
`;

export const Text = styled.div`
  margin-bottom: 40px;

  h1 {
    color: var(--bg-color);
    -webkit-text-stroke: 2px var(--white);
    font-family: var(--font-family-absolute);
    font-weight: 800;
    font-size: 2.6em;
    letter-spacing: 4px;

    @media only screen and (min-width: 1023px) {
      font-size: 3rem;
    }
  }

  h3 {
    color: var(--white);
    margin-bottom: 10px;
    font-weight: 400;
  }
`;

export const AnimatedText = styled.div`
  font-family: var(--font-family);
  color: var(--white);
  max-width: fit-content;
  font-weight: 600;
  font-size: 1.2em;
  overflow: hidden;
  border-right: 0.15em solid #ff9d19;
  white-space: nowrap;
  margin: 10px auto;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--white);
    }
  }

  @media only screen and (min-width: 1023px) {
    margin: 0;
    font-size: 1.7em;
  }

  @media only screen and (max-width: 320px) {
    font-size: 1.2em;
  }
`;

export const DownloadBtn = styled.div`
  border: 1px solid var(--white);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: fit-content;
  padding: 12px 16px;
  margin: 2rem auto;
  transition: 0.4s;

  .download-icon {
    width: 20px;
    height: 20px;
  }

  a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 2px;
    margin-left: 10px;
  }

  &:hover {
    color: var(--bg-color);
    background-color: var(--white);

    a {
      color: var(--bg-color);
      font-weight: 700;
    }
  }
  @media only screen and (min-width: 1023px) {
    margin: 4rem 0;
  }
`;

export const Arrow = styled.a`
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  bottom: 70px;
  animation: downward 1s infinite alternate;

  @keyframes downward {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;
