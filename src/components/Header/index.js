import React from "react";

// Markup
import {
  Wrapper,
  Content,
  UserImg,
  Info,
  Text,
  AnimatedText,
  DownloadBtn,
  Arrow,
} from "./Header.style";

// Images
import HeaderImg from "../../images/jibolacodes.jpg";
import ArrowDown from "../../images/angle-double-down.svg";

import { UilUpload } from "@iconscout/react-unicons";

const Header = ({ scrollHeight }) => (
  <Wrapper id="home">
    <Content>
      <UserImg src={HeaderImg} alt="Jibolacodes image" />
      <Info>
        <Text>
          <h3>I'm</h3>
          <h1>Ajibola Akindunbi</h1>
          <p style={{ color: "white" }}>{scrollHeight}</p>
        </Text>
        <AnimatedText>Front-End Web Developer</AnimatedText>
        <DownloadBtn>
          <UilUpload className="download-icon"/>
          <a
            href="https://drive.google.com/file/d/1pllpsf2pLGWpfDBOMtIzx8k0kzj8BM_m/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </DownloadBtn>
      </Info>
    </Content>
    <Arrow href="#portfolio">
      <img src={ArrowDown} alt="Arrow Down" />
    </Arrow>
  </Wrapper>
);

export default Header;
