import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  place-items: center;
  width: 100%;
  input,
  textarea {
    margin: 10px 0;
    font-family: var(--font-family);
    font-size: 14px;
    padding-left: 10px;
    border: 1px solid #dee2e6;
    transition: 0.3s;

    :hover,
    :active {
      outline: none;
      border: 2px solid var(--bg-color);
      background: var(--white);
    }
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
      width: 570px;
      height: 45px;
    }
  }

  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 20px;

    @media screen and (min-width: 768px) {
      max-width: 570px;
    }
  }

  button {
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

    :hover {
      background-color: var(--bg-color);
      color: #fff;
    }
  }
`;

export const Message = styled.div`
  height: 400px;
  section {
    background-color: var(--bg-color);
    padding: 60px 20px;

    p {
      color: var(--white);
      text-align: center;
      font-size: larger;
      line-height: 36px;
    }
  }
`;
