import React from "react";

// Components
import Work from "../Work";
// import WorkModal from "../WorkModal";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Container, Filters } from "./Portolio.style"

const Portfolio = ({ showButton, handleClick, projects, handleClose, handleModal, modal }) => (
  <Wrapper id="portfolio">
    <Content>
      <Title>
        <h1 className="section--title">Portfolio</h1>
        <p className="section--title--absolute">Portfolio</p>
      </Title>
      <Container>
        <Filters>

        </Filters>
      </Container>
      <Work
        showButton={showButton}
        handleClick={handleClick}
        projects={projects}
        handleClose={handleClose}
        handleModal={handleModal}
      />
      {/* {modal && <WorkModal closeModal={handleModal}/>} */}
    </Content>
  </Wrapper>
);

export default Portfolio;
