import styled from "styled-components";

export const Hero = styled.img`
  width: 100%;
  border-radius: 5px;
  margin: 0 auto;
 
  @media only screen and (min-width: 426px) {
    width: 400px;
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
    font-size: 16px;
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
