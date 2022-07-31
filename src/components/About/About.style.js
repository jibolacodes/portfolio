import styled from "styled-components";

export const Wrapper = styled.div`
  padding: var(--page-padding);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    font-size: 4em;
    -webkit-text-stroke: 1px #dee2e6;
    color: white;

    @media only screen and (min-width: 1023px){
      font-size: 5em;
    }
  }
  .section--title--absolute {
    position: absolute;
    color: var(--bg-color);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 1.5em;
    font-weight: 900;
    bottom: 27px;
    right: 36px;

    @media only screen and (min-width: 1023px){
      font-size: 1.8em;
      bottom: 36px;
      right: 55px;
    }
  }
`;
export const Hero = styled.img`
  width: 100%;
  border-radius: 5px;
  margin: 0 auto;
 
  @media only screen and (min-width: 426px) {
    width: 300px;
  }
  @media only screen and (min-width: 1023px){
    width: 360px;
    margin: 0 15px;
  }
`;

export const Description = styled.div`
  margin-top: 24px;
  h3 {
    margin-bottom: 12px;
    color: var(--dark-text-color);
    letter-spacing: 3px;
    font-size: 1.3em;
  }
  p {
    color: var(--dark-text-color);
    line-height: 24px;
  }

  @media only screen and (min-width: 1023px) {
    width: 50%;
    margin: 0 15px;
  }
`;

export const Button = styled.button`
  font-family: var(--font-family);
  font-weight: 700;
  color: var(--bg-color);
  letter-spacing: 3px;
  margin-top: 24px;
  padding: 12px 22px;
  border: 1px solid var(--bg-color);
  background-color: #fff;
  border-radius: 5px;

  :hover { 
    background-color: var(--bg-color);
    color: #fff;
  }
`
