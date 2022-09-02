import React from "react";

// Markup
import { Container, Image, Button, Info, Text, Stack } from "./Work.style";

// Components
import WorkButton from "../WorkButton";

// Images
import { UilFocusAdd } from '@iconscout/react-unicons'

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
        <div className="img">
          <img src={`../../images/${project.logo}`} alt={project.title} />
        </div>
        <Button>
          <button
            type="button"
            className="btn"
            onClick={() => handleClick(project.id, pullProjectData(project))}
          >
            <UilFocusAdd className="icon"/>
          </button>
        </Button>
        <Info>
          <Text>
            <p>{project.title}</p>
          </Text>
          <Stack>
            {project.stack.map((icon, id) => (
              <img src={`../../images/${icon}`} alt={icon} key={id} />
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
