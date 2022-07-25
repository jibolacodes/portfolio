import React from "react";

// Markup
import { Wrapper, Content, Hero, Description } from "./About.style";

// Image
import userImg from "../../images/jibolacodes_2.jpg";

const About = () => (
  <Wrapper id="about">
		<h1>ABOUT ME</h1>
    <Content>
			<Hero src={userImg} alt='user image' />
			<Description>This is the description of the user.</Description>
		</Content>
  </Wrapper>
);

export default About;