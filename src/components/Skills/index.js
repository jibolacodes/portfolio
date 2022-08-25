import React from "react";
// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Section, Logo } from "./Skills.style";

// animations
import "animate.css";

const logos = [
  "react",
  "python",
  "javascript",
  "django",
  "api",
  "sass",
  "figma",
  "git",
  "sql"
];


const Skills = () => (
  <Wrapper id="skills">
    <Content>
      <Title>
        <h1 className="section--title">Skills</h1>
        <p className="section--title--absolute">Skills</p>
      </Title>
      <Section>
        {logos.map((logo) => (
          <Logo key={logo}>
            <img src={`../../images/${logo}.png`} alt={logo} />
            <div className="underline"></div>
            <p>{logo}</p>
          </Logo>
        ))}
      </Section>
    </Content>
  </Wrapper>
);

export default Skills;
