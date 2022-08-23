import React from "react";

import { Training, Section, Bullet, Description} from  "../Education/Education.style"

const Certificates = ({ schools }) => (
  <Training>
    <h3 className="training--title">Certificates</h3>
    {schools.map((school, id) => (
      <Section key={id}>
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
  </Training>
);


export default Certificates;