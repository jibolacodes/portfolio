import React from "react";

// Markup
import { Wrapper, Content, Images } from "./WorkModal.style";

// Images
import { UilTimes } from "@iconscout/react-unicons";
import { UilArrowCircleLeft } from "@iconscout/react-unicons";
import { UilArrowCircleRight } from "@iconscout/react-unicons";

const WorkModal = ({ closeModal }) => (
  <Wrapper>
    <UilTimes onClick={closeModal} />
    <Content>
      <UilArrowCircleLeft />
      <Images>
        <h1>This is a Modal!!!!</h1>
      </Images>
      <UilArrowCircleRight />
    </Content>
  </Wrapper>
);

export default WorkModal;
