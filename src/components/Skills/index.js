import React from "react";
// import { FaHtml5, FaJsSquare, FaCss3Alt, FaPython, FaReact, FaGitAlt, FaDatabase, FaBootstrap } from "react-icons/fa"
// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Section, Logo } from "./Skills.style";

// Image
import Html from "../../images/html.png";
import Css from "../../images/css.png";
import Javascript from "../../images/javascript.png";
import ReactImg from "../../images/react.png";
import Python from "../../images/python.png";
import Api from "../../images/api.png";
import Sass from "../../images/sass.png";

const About = () => (
  <Wrapper id="skills">
    <Content>
      <Title>
        <h1 className="section--title">Skills</h1>
        <p className="section--title--absolute">Skills</p>
      </Title>
      <Section>
        <img src={Html} alt="html image" />
        <img src={Css} alt="css image" />
        <img src={Javascript} alt="js image" />
        <img src={ReactImg} alt="react image" />
        <img src={Python} alt="python image" />
        <img src={Api} alt="api image" />
        <img src={Sass} alt="sass image" />
      </Section>
    </Content>
  </Wrapper>
);

export default About;
