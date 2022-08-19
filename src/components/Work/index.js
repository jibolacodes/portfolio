import React from "react";

// Markup
import { Container, Image } from "./Work.style";

//Components
import Button from "../WorkButton";

const Work = ({ handleClick, projects, handleClose, handleModal }) => (
  <Container>
    {projects.map((project, id) => (
      <Image key={project.id}>
        <img
          src={`../../images/${project.image}`}
          alt={project.title}
          onClick={() => handleClick(project.id)}
        />
        {project.isButton && (
          <Button handleClose={handleClose} openModal={handleModal} />
        )}
      </Image>
    ))}
  </Container>
);

export default Work;
