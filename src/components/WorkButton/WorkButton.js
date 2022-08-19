import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-color);
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

  .closeBtn {
    align-self: flex-end;
    color: var(--white);
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .gallery {
    border-radius: 5px;
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
`;

export const LinkButtons = styled.div`
  padding: 10px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;

  .live,
  .github {
    color: var(--white);
    cursor: pointer;
  }
`;
