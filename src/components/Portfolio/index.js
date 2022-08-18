import React from "react";

// Components
import Work from "../Work"

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";

const Portfolio = ({ showButton, handleClick }) => (
  <Wrapper id="portfolio">
    <Content>
      <Title>
        <h1 className="section--title">Portfolio</h1>
        <p className="section--title--absolute">Portfolio</p>
      </Title>
      <Work showButton={showButton} handleClick={handleClick}/>
    </Content>
  </Wrapper>
);

export default Portfolio;