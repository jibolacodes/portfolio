import styled from "styled-components";

export const Comment = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .carousel {
    max-width: 300px;
    margin: 0 auto;

    @media screen and (min-width: 1024px) {
      max-width: 480px;

    }
  }

  max-height: fit-content;
  .quote-left,
  .quote-right {
    font-family: var(--font-family);
    text-align: center;
    font-weight: 900;
    font-size: 4em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px var(--bg-color);
    color: var(--white);
  }

  .quote-left {
    max-height: fit-content;
    p {
      height: 47px;
      text-align: left;
    }
  }
  .quote-right {
    max-height: fit-content;
    p {
      height: 47px;
      text-align: right;
    }
  }
`;

export const Text = styled.section`
  margin: 24px 0 0 0;
  text-align: center;
  font-style: italic;
  font-weight: 300;
`;

export const Person = styled.section`
  display: grid;
  place-items: center;
  margin-top: 30px;

  .image {
    img {
      object-fit: cover;
      width: 130px;
      height: 130px;
      clip-path: circle();
    }
  }
  .name {
    margin: 5px 0;
  }
  .role {
    color: var(--grey-text-color);
  }
`;
