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
import { UilUpload } from "@iconscout/react-unicons";

const Header = ({ scrollHeight }) => (
  <Wrapper id="home">
    <Content>
      <UserImg src="../../images/jibolacodes_2.jpg" alt="Jibolacodes image" />
      <Info>
        <Text>
          <h3>I'm</h3>
          <h1>Ajibola Akindunbi</h1>
          <p style={{ color: "white" }}>{scrollHeight}</p>
        </Text>
        <AnimatedText>Full-Stack Developer</AnimatedText>
        <DownloadBtn>
          <UilUpload className="download-icon" />
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
    <Arrow href="#footer">
      <img src="../../images/angle-double-down.svg" alt="Arrow Down" />
    </Arrow>
  </Wrapper>
);

export default Header;
