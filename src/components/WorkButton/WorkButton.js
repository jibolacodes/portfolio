import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-color);
  width: 270px;
  height: 210px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .closeBtn {
    align-self: flex-end;
    color: red;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      color: var(--white);
    }
  }

  .gallery {
    border-radius: 5px;
    font-size: 200px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    color: var(--white);
    transition: 0.4s;

    :hover {
      color: var(--dark-text-color);
    }
  }
`;

export const LinkButtons = styled.div`
  padding: 10px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;

  a {
    background-color: var(--grey-text-color);
    font-size: smaller;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    color: var(--white);
    border: 3px solid var(--bg-color);
    transition: 0.3s;

    .live,
    .github {
      color: var(--white);
      cursor: pointer;
      margin-right: 10px;
      width: 16px;
      height: 16px;
    }

    :hover {
      background-color: var(--white);
      border: 3px solid var(--grey-text-color);
      color: var(--dark-text-color);

      .live,
      .github {
        color: var(--bg-color);
      }
    }
  }
`;
