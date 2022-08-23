import React from "react";

// Markup
import { Wrapper, Content, Socials, Text } from "./Footer.style";

// Images
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";

const Footer = () => (
  <Wrapper>
    <Content>
      <Socials>
        <button class="btn btn-github">
          <a
            href="https://github.com/jibolacodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilGithub />
          </a>
        </button>
        <button class="btn btn-github">
          <a
            href="https://www.linkedin.com/in/ajibola-akindunbi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilLinkedin />
          </a>
        </button>
        <button class="btn btn-github">
          <a
            href="https://www.twitter.com/jibolacodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilTwitter />
          </a>
        </button>
      </Socials>
      <Text>
        <p>
          Made by jibolacodes
        </p>
      </Text>
    </Content>
  </Wrapper>
);

export default Footer;
