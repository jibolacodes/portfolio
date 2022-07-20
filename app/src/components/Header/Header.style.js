import styled from "styled-components";

export const Wrapper = styled.div`
  background:linear-gradient(45deg, #fe3a7d, #ff7b0a);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;    
`;

export const Content = styled.div`
  text-align: center;
  padding: 20px;
  
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
  margin-bottom: 20px;
  width: 180px;
  clip-path: circle();

  @media only screen and (min-width: 1023px) {
    width: 300px;
  }
`;

export const Info = styled.div`
  background-color: #272422;
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
    font-weight: 600;
    font-size: 2.2em;
    color: #FF9D19;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Ubuntu', sans-serif;
    margin: 0 auto;
    text-shadow: 4px 4px #db2777;

    @media only screen and (min-width: 1023px) {
      font-size: 3rem;
    }
  }

  h3 {
    margin-bottom: 10px;
    font-weight: 400;
    color: rgb(211, 206, 198);
  }
`;


export const AnimatedText = styled.div`
  max-width: fit-content;
  font-weight: 400;
  font-size: 1.3em;
  color: rgb(211, 206, 198);
  overflow: hidden;
  border-right: 0.15em solid #FF9D19;
  white-space: nowrap;
  margin: 50px auto;
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

  @media only screen and (min-width: 1023px) {
    margin: 0;
    font-size: 1.7em;
  }
`;

export const DownloadBtn = styled.div`
  border: 2px dotted #FF9D19;
  border-radius: 20px;
  width: fit-content;
  padding: 8px 20px;
  margin: 1rem auto;

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
  @media only screen and (min-width: 1023px) {
    margin: 4rem 0;
  }
`;


export const Arrow = styled.img`
  width: 40px;
  position: relative;
  bottom: -60px;
  animation: downward 1s infinite alternate;

  @keyframes downward {
    0%{ transform: translateY(0); }
    100% { transform: translateY(-10px); }
  }

  @media only screen and (min-width: 1023px) {
    position: absolute;
    bottom: 0px;
    width: 60px;
  }
`;