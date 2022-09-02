import React from "react";

// Components
import Work from "../Work";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Container, Filters } from "./Portolio.style";

const Portfolio = ({
  showButton,
  handleClick,
  projects,
  handleClose,
  handleModal,
  pullProjectData,
}) => (
  <Wrapper id="portfolio">
    <Content>
      <Title>
        <h1 className="section--title">Projects</h1>
        <p className="section--title--absolute">Projects</p>
      </Title>
      <Container>
        <Filters></Filters>
        <Work
          showButton={showButton}
          handleClick={handleClick}
          projects={projects}
          handleClose={handleClose}
          handleModal={handleModal}
          pullProjectData={pullProjectData}
        />
      </Container>
    </Content>
  </Wrapper>
);

export default Portfolio;
