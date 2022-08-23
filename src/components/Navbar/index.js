import React from "react";

// Markup
import { Wrapper, Content, Logo, NavLinks, NavToggle } from "./navbar.style";

// Image
import { UilTimes} from "@iconscout/react-unicons";
import { UilPlus} from "@iconscout/react-unicons";

// animations
import "animate.css";

const navLinks = [
  "home",
  "about",
  "training",
  "skills",
  "portfolio",
  "comments",
  "contact me",
];

const Navbar = ({ show, setShow }) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <h1>Jibolacodes</h1>
        </Logo>
        <NavToggle onClick={() => setShow(!show)}>
          {show ? <UilTimes className="toggle-btn"/> : <UilPlus className="toggle-btn"/>}
        </NavToggle>
      </Content>
      {show && (
        <NavLinks>
          <ul className="animate__animated animate__fadeInLeft">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link}`}>
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </NavLinks>
      )}
    </Wrapper>
  );
};

export default Navbar;
