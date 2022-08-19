import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  width: 240px;
  height: 180px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 360px;
    height: 300px;
  }

  .closeBtn {
    align-self: flex-end;
    color: var(--dark-text-color);
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .gallery {
    border-radius: 5px;
    width: 60px;
    font-size: 200px;
    height: 60px;
    cursor: pointer;
    color: var(--bg-color);

    @media screen and (min-width: 1024px) {
      width: 120px;
      height: 120px;
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
    background-color: var(--dark-text-color);
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

    @media screen and (min-width: 1024px) {
font-size: 1em;
  }
    
  }

  .live,
  .github {
    color: var(--white);
    cursor: pointer;
    margin-right: 10px;
    width: 16px;
    height: 16px;

    @media screen and (min-width: 1024px) {
      width: 40px;
      height: 24px;
    }

  }
`;
