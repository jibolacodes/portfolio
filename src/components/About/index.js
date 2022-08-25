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
            Hello there, I am a front-end web developer who loves to create web
            applications using React.js. When I am not glued to my computer, I
            spend my time reading a book, watching football, seeing a movie or having
            great conversations with people.
          </p>
          <p>
            I also produce, mix and master music for music artistes, movies and
            other industries where audio is being used.
          </p>
          <p>I am from Nigeria and I'm glad you are on my page.</p>
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
