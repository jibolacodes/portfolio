import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  width: 100%;
  input,
  textarea {
    margin: 10px 0;
    font-family: var(--font-family);
    padding-left: 10px;
    border: 2px solid #dee2e6;
    transition: 0.3s;

    :hover,
    :active {
      outline: none;
      border: 2px solid var(--bg-color);
    }
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 20px;

    @media screen and (min-width: 768px) {
      width: 570px;
      height: 45px;
    }
  }

  textarea {
    max-width: 100%;
    padding: 10px;
    border-radius: 20px;

    @media screen and (min-width: 768px) {
      max-width: 570px;
    }
  }

  button {
    width: 150px;
    height: 44px;
    border: 1px solid var(--bg-color);
    background-color: var(--white);
    border-radius: 30px;
    margin: 20px auto;
    color: var(--bg-color);
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background-color: var(--bg-color);
      color: #fff;
    }
  }
`;
