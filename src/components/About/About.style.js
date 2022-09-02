import styled from "styled-components";

export const Hero = styled.img`
  width: 100%;
  border-radius: 5px;
  margin: 0 auto;

  @media only screen and (min-width: 426px) and (max-width: 1023px) {
    width: 400px;
  }
  @media only screen and (min-width: 1024px) {
    width: 360px;
    margin: 0 15px;
  }
`;

export const Description = styled.section`
  margin-top: 24px;
  h3 {
    color: var(--dark-text-color);
    margin-bottom: 12px;
    font-size: 1.3em;
  }
  p {
    color: var(--dark-text-color);
    line-height: 28px;
    margin-bottom: 12px;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
    margin: 0 15px;
  }
`;

export const Button = styled.button`
  color: var(--bg-color);
  font-size: var(--font-size);
  font-family: var(--font-family);
  border: 1px solid var(--bg-color);
  background-color: var(--white);
  padding: 0 20px;
  height: 44px;
  border-radius: 30px;
  margin: 20px auto;
  cursor: pointer;
  transition: 0.3s;
  display: none;

  @media only screen and (min-width: 1024px) {
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
    color: var(--bg-color);
    border: 1px solid var(--bg-color);
    border-radius: 5px;
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
    margin: 15px 25px 0 0;
    background: none;
    padding: 5px 10px;

    @media only screen and (min-width: 1024px) {
      margin: 0 0 0 20px;
    }

    a {
      color: var(--bg-color);
      font-size: var(--font-size);
      font-family: var(--font-family);
      margin-right: 10px;
      text-decoration: none;
    }

    :hover {
      color: var(--white);
      background-color: var(--bg-color);

      a {
        color: var(--white);
      }
    }
  }
`;
