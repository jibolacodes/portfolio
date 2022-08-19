import React from "react";

// Markup
import { Container, Image, Info, Text, Stack } from "./Work.style";

// Components
import WorkButton from "../WorkButton";

const Work = ({
  handleClick,
  projects,
  handleClose,
  handleModal,
  pullProjectData,
}) => (
  <Container>
    {projects.map((project, id) => (
      <Image key={project.id}>
        <img
          src={`../../images/${project.image}`}
          alt={project.title}
          onClick={() => handleClick(project.id, pullProjectData(project))}
        />
        <Info>
          <Text>
            <p>{project.title}</p>
          </Text>
          <Stack>
            {project.stack.map((icon, id) => (
              <img src={`../../images/${icon}`} alt={icon} />
            ))}
          </Stack>
        </Info>
        {project.isButton && (
          <WorkButton
            handleClose={handleClose}
            openModal={handleModal}
            project={project}
          />
        )}
      </Image>
    ))}
  </Container>
);

export default Work;
