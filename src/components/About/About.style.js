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
    font-size: var(--font-size);
    margin-bottom: 12px;
  }

  @media only screen and (min-width: 1023px) {
    width: 50%;
    margin: 0 15px;
  }
`;

export const Button = styled.button`
    width: 150px;
    height: 44px;
    border: 1px solid var(--bg-color);
    background-color: var(--white);
    border-radius: 30px;
    margin: 20px auto;
    cursor: pointer;
    transition: 0.3s;
    
    a {
      color: var(--bg-color);
      text-decoration: none;
    }

  :hover { 
    background-color: var(--bg-color);
    color: #fff;

    a {
      color: var(--white);
    }
  }
`
