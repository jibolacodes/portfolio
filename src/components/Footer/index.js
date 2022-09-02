import React from "react";

// Markup
import { Wrapper, Content, Socials, Text } from "./Footer.style";

// Images
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";

const Footer = () => (
  <Wrapper id="footer">
    <Content>
      <Socials>
        <a
          href="https://github.com/jibolacodes"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-github"
        >
          <UilGithub />
        </a>

          <a
            href="https://www.linkedin.com/in/ajibola-akindunbi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-linkedin"
          >
            <UilLinkedin />
          </a>

          <a
            href="https://www.twitter.com/jibolacodes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-twitter"
          >
            <UilTwitter />
          </a>

      </Socials>
      <Text>
        <p>Made by jibolacodes <span className="emoji" role="img" aria-label="emoji">👑</span></p>
      </Text>
    </Content>
  </Wrapper>
);

export default Footer;
