import React from 'react';
// Markup

import { Wrapper, Content, Logo, NavLinks, NavToggle } from "./navbar.style";

// Image
import CloseBtn from "../../images/times.svg";
import OpenBtn from "../../images/bars.svg";

// animations
import "animate.css";

const navLinks = [
  "home",
  "about",
  "education",
  "skills",
  "portfolio",
  "contact me",
];

const Navbar = ({ show, setShow, scrollHeight }) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <h1>Jibolacodes</h1>
        </Logo>
        <NavToggle onClick={() => setShow(!show)}>
          {show ? (
            <img src={CloseBtn} alt="Close button" />
          ) : (
            <img src={OpenBtn} alt="Open button" />
          )}
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
