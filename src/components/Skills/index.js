import React, { useState, useEffect } from "react";
// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Section, Logo, Filters } from "./Skills.style";

import { skillLogos } from "../../data";

// animations
import "animate.css";

const Skills = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    setLogos(skillLogos[0].tools);
  }, []);

  const handleClick = (event) => {
    const tag = event.target.innerHTML;

    for (let i = 0; i < skillLogos.length; i++) {
      if (tag === skillLogos[i].skill) {
        setLogos(skillLogos[i].tools);
      }
    }
  };

  return (
    <Wrapper id="skills">
      <Content>
        <Title>
          <h1 className="section--title">Skills</h1>
          <p className="section--title--absolute">Skills</p>
        </Title>
        <Filters>
          <button
            onClick={(event) => handleClick(event)}
            className="filter-btn"
          >
            front-end
          </button>
          <button
            onClick={(event) => handleClick(event)}
            className="filter-btn"
          >
            back-end
          </button>
          <button
            onClick={(event) => handleClick(event)}
            className="filter-btn"
          >
            others
          </button>
        </Filters>
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
};

export default Skills;
