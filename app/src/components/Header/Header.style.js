import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #272422;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Text = styled.div`
  h1 {
    font-weight: 600;
    font-size: 2.6em;
    color: #FF9D19;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Ubuntu', sans-serif;
  }

  h3 {
    font-weight: 400;
    color: rgb(211, 206, 198);
  }
`;

export const UserImg = styled.img`
  width: 220px;
  border-radius: 50%;
`;

export const AnimatedText = styled.div`
  max-width: fit-content;
  font-weight: 400;
  font-size: 1.5em;
  color: rgb(211, 206, 198);
  overflow: hidden;
  border-right: 0.15em solid #FF9D19;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.12em;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #FF9D19 }
  } 
`;

export const DownloadBtn = styled.div`
  border: 1px solid #FF9D19;
  border-radius: 20px;
  width: fit-content;
  padding: 8px 20px;
  margin: 2rem auto;

  a {
    text-decoration: none;
    font-weight: 500;
    color: #FF9D19;
    letter-spacing: 2px;
  }

  &:hover {
    background-color: #FF9D19;
    
    a {
      color: #272422;
      font-weight: 700;
    }
  }
`;
