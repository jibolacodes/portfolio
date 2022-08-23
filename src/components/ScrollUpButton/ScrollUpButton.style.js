import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: var(--white);
  padding: 10px 3px;
  border: 2px solid var(--bg-color);
  border-radius: 20px;
  position: fixed;
  bottom: 0;
  right: 10px;
  top: 90vh;
  height: fit-content;

  cursor: pointer;

  a {
    color: var(--bg-color);
  }

  animation: downward 1s infinite alternate;

  @keyframes downward {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  :hover {
    background-color: var(--bg-color);
    border-color: var(--white);
    padding: 12px 4px;

    a {
      color: var(--white);
    }
  }
`;
