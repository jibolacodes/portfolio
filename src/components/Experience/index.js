import React from "react";

import { Training, Section, Bullet, Description} from  "../Training/Training.style"

const Jobs = ({ jobs }) => (
  <Training>
    <h3 className="training--title">Experience</h3>
    {jobs.map((job, id) => (
      <Section key={id}>
        <Bullet>
          <span></span>
        </Bullet>
        <Description>
          <h3>
            {job.company}
            {/* <span>online</span> */}
          </h3>
          <h4>
            {job.role}{" "}
            <span>
              | {job.startYear} - {job.endYear}
            </span>
          </h4>
          <p>{job.description}</p>
        </Description>
      </Section>
    ))}
  </Training>
);


export default Jobs;