import styled from "styled-components";

export const Wrapper = styled.footer`
  padding: 30px;
  background-color: var(--bg-color);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .btn {
    background: none;
    border: none;
    background-color: var(--white);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--bg-color);
    font-family: var(--font-family);

    :hover {
      background-color: var(--bg-color);
      color: var(--white);
      border: 2px solid var(--white);
    }
  }
`;

export const Text = styled.section`
  p {
    color: var(--white);

    .emoji {
      font-size: 1.3em;
    }
  }
`;
