import React from "react";

// Markup
import { Container, LinkButtons } from "./WorkButton";

// Images
import { UilApps } from "@iconscout/react-unicons";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import { UilCodeBranch } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const WorkButton = ({ handleClose, openModal, project }) => (
  <Container>
    <UilTimes className="closeBtn" onClick={handleClose} />
    <UilApps className="gallery" onClick={openModal} />
    <LinkButtons>
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
        <UilExternalLinkAlt className="live" />
        Demo
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilCodeBranch className="github" />
        Source
      </a>
    </LinkButtons>
  </Container>
);

export default WorkButton;
