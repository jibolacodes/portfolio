import React from "react";
import { Container, LinkButtons } from "./WorkButton";
import { UilImages } from "@iconscout/react-unicons";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import { UilCodeBranch } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const WorkButton = ({ handleClose }) => (
  <Container>
    <UilTimes className="closeBtn" onClick={handleClose} />
    <UilImages className="gallery" />
    <LinkButtons>
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        <UilExternalLinkAlt className="live" />
      </a>
      <a
        href="http://github.com/jibolacodes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilCodeBranch className="github" />
      </a>
    </LinkButtons>
  </Container>
);

export default WorkButton;
