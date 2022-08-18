import React from "react";

// Markup
import { Container, Image } from "./Work.style";

//Components
import Button from "../WorkButton";

const projects = [
  {
    id: 1,
    title: "project-a",
    image: "portfolio_sample_1.jpg",
  },
  {
    id: 2,
    title: "project-a",
    image: "portfolio_sample_2.jpg",
  },
  {
    id: 3,
    title: "project-a",
    image: "portfolio_sample_3.jpg",
  },
  {
    id: 4,
    title: "project-a",
    image: "portfolio_sample_4.jpg",
  },
];

const Work = ({ showButton, handleClick }) => (
  <Container>
    {projects.map((project) => (
      <Image>
        <img
          src={`../../images/${project.image}`}
          alt={project.title}
          key={project.id}
          onClick={() => handleClick()}
        />
        {showButton && project.id ? <Button /> : null}
      </Image>
    ))}
  </Container>
);

export default Work;
