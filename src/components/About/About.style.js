import styled from "styled-components";

export const Hero = styled.img`
  width: 100%;
  border-radius: 5px;
  margin: 0 auto;

  @media only screen and (min-width: 426px) {
    width: 400px;
  }
  @media only screen and (min-width: 1023px) {
    width: 360px;
    margin: 0 15px;
  }
`;

export const Description = styled.div`
  margin-top: 24px;
  h3 {
    margin-bottom: 12px;
    color: var(--dark-text-color);
    font-size: larger;
  }
  p {
    color: var(--dark-text-color);
    line-height: 24px;
    margin-bottom: 12px;
  }

  @media only screen and (min-width: 1023px) {
    h3 {
      font-size: 1.6rem;
    }
    width: 50%;
    margin: 0 15px;
  }
`;

export const Button = styled.button`
  padding: 0 20px;
  height: 44px;
  font-size: var(--font-size);
  font-family: var(--font-family);
  border: 1px solid var(--bg-color);
  background-color: var(--white);
  border-radius: 30px;
  margin: 20px auto;
  color: var(--bg-color);
  cursor: pointer;
  transition: 0.3s;
  display: none;

  @media only screen and (min-width: 1023px) {
    display: block;
  }

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
`;
export const Socials = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;

  .btn {
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;

    margin: 10px 20px 0 0;

    background: none;
    border: none;
    color: var(--bg-color);
    border: 1px solid var(--bg-color);
    padding: 5px 10px;
    border-radius: 5px;

    @media only screen and (min-width: 1023px) {
      margin: 0 0 0 20px;
    }

    a {
      margin-right: 10px;
      text-decoration: none;
      color: var(--bg-color);
      font-size: 16px;
      font-family: var(--font-family);
    }

    :hover {
      background-color: var(--bg-color);
      color: var(--white);

      a {
        color: var(--white);
      }
    }
  }
`;
