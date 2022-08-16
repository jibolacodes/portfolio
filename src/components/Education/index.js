import React from "react";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Section, Description, Bullet } from "./Education.style";

// Image

const schools = [
  {
    name: "University of Lagos",
    mode: "campus",
    course: "BSc. Systems Engineering",
    startYear: "Sept 2010",
    endYear: "Nov 2016",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quae. Voluptatibus, autem pariatur porro ex consectetur deleniti quod, debitis quia adipisci atque corrupti.",
  },
  {
    name: "freecodecamp",
    course: "Javascript Algorithms and Data Structures",
    startYear: "July 2021",
    endYear: "Dec 2021",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quae. Voluptatibus, autem pariatur porro ex consectetur deleniti quod, debitis quia adipisci atque corrupti.",
  },
  {
    name: "Havard's CS50x",
    mode: "online",
    course: "Introduction to Computer Science",
    startYear: "Jan 2022",
    endYear: "July 2022",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quae. Voluptatibus, autem pariatur porro ex consectetur deleniti quod, debitis quia adipisci atque corrupti.",
  },
];

const About = () => (
  <Wrapper id="education">
    <Content>
      <Title>
        <h1 className="section--title">Education</h1>
        <p className="section--title--absolute">Education</p>
      </Title>
      {schools.map((school) => (
        <Section>
          <Bullet>
            <span></span>
          </Bullet>
          <Description>
            <h3>
            {school.course}
            {/* <span>online</span> */}
            </h3> 
            <h4>
              {school.name}{" "}
              <span>
                | {school.startYear} - {school.endYear}
              </span>
            </h4>
            <p>{school.description}</p>
          </Description>
        </Section>
      ))}
    </Content>
  </Wrapper>
);

export default About;
