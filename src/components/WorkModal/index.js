import React, { useState } from "react";

// Markup
import { Wrapper, Content, Container, Images } from "./WorkModal.style";

// Data
import images from "../../data";

// Images
import { UilTimes } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";

const WorkModal = ({ closeModal, images }) => {
  const [index, setIndex] = useState(0);

  function nextButton() {
    if (index < images.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  }

  function prevButton() {
    if (index <= 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <Wrapper>
      <Content>
        <UilTimes onClick={closeModal} className="closeBtn" />
        <Container>
          <UilArrowLeft className="arrow-left" onClick={prevButton} />
          <Images>
            <img src={`../../images/${images[index]}`} alt="work images" />
          </Images>
          <UilArrowRight className="arrow-right" onClick={nextButton} />
        </Container>
      </Content>
    </Wrapper>
  );
};

export default WorkModal;
