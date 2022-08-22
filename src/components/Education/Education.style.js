import styled from "styled-components";

export const Section = styled.section`
  padding: 10px 20px;
  border-left: 1px solid var(--bg-color);
  position: relative;
  margin: 0 auto;
`;

export const Training = styled.article`
margin-bottom: 30px;
  .training--title {
    margin-bottom: 20px;
    color: var(--dark-text-color);
    text-decoration: underline var(--bg-color) 2px;
    line-height: 20px;
  }
`;

export const Bullet = styled.div`
  border: 1px solid var(--bg-color);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  position: absolute;
  left: -8px;
  margin: 30p;

  span {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: var(--bg-color);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Description = styled.div`
  h3 {
    color: var(--dark-text-color);
    margin-bottom: 5px;
  }
  h4 {
    margin-bottom: 10px;
    color: var(--grey-text-color);

    span {
      color: var(--dark-text-color);
      font-weight: normal;
      font-size: smaller;
    }
  }
`;
