import React from "react";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
// import { Training, Section, Description, Bullet } from "./Education.style";

import Certificates from "../Certificates";
import Jobs from "../Jobs";

const Education = ({ schools, jobs }) => (
  <Wrapper id="education">
    <Content>
      <Title>
        <h1 className="section--title">Training</h1>
        <p className="section--title--absolute">Training</p>
      </Title>
      <Certificates schools={schools}/>
      <Jobs jobs={jobs}/>
    </Content>
  </Wrapper>
);

export default Education;
