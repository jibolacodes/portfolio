import React from "react";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
// import { Training, Section, Description, Bullet } from "./Education.style";

import Certificates from "../Certificates";
import Jobs from "../Jobs";

const Education = ({ schools, jobs }) => (
  <Wrapper id="training">
    <Content>
      <Title>
        <h1 className="section--title">Training</h1>
        <p className="section--title--absolute">Training</p>
      </Title>
      <section>
        <Certificates schools={schools} />
        <Jobs jobs={jobs} />
      </section>
    </Content>
  </Wrapper>
);

export default Education;
