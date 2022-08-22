import React from "react";

// Markup
import { Wrapper, Content, Title} from "../../PageStyle";
import { Hero, Description, Button } from "./About.style";

// Image
import userImg from "../../images/jibolacodes_2.jpg";

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quae.
            Voluptatibus, autem pariatur porro ex consectetur deleniti quod,
            debitis quia adipisci atque corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quae.
            Voluptatibus, autem pariatur porro ex consectetur deleniti quod,
            debitis quia adipisci atque corrupti.
          </p>
          <Button>
            <a href="#contact me">Contact Me</a>
          </Button>
        </Description>
      </div>
    </Content>
  </Wrapper>
);

export default About;
