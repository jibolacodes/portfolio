import React from "react";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Hero, Description, Button, Socials } from "./About.style";

// Image
import userImg from "../../images/jibolacodes_2.jpg";
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";

const About = () => (
  <Wrapper id="about">
    <Content>
      <Title>
        <h1 className="section--title">About</h1>
        <p className="section--title--absolute">about</p>
      </Title>
      <div className="flex__container">
        <Hero src={userImg} alt="user image" />
        <Description>
          <h3>Front-End Developer</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            quae. Voluptatibus, autem pariatur porro ex consectetur deleniti
            quod, debitis quia adipisci atque corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            quae. Voluptatibus, autem pariatur porro ex consectetur deleniti
            quod, debitis quia adipisci atque corrupti.
          </p>
          <Socials>
            <Button>
              <a href="#contact me">Contact Me</a>
            </Button>
            <button class="btn btn-github">
              <a
                href="https://github.com/jibolacodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <UilGithub />
            </button>
            <button class="btn btn-github">
              <a
                href="https://www.linkedin.com/in/ajibola-akindunbi"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <UilLinkedin />
            </button>
          </Socials>
        </Description>
      </div>
    </Content>
  </Wrapper>
);

export default About;
