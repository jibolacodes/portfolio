import React from "react";

// Markup
import { Wrapper, Content, Logo, NavLinks, NavToggle } from "./navbar.style";

// Image
import { UilTimes} from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";

import { UilEstate } from '@iconscout/react-unicons'
import { UilUserCircle } from '@iconscout/react-unicons'
import { UilFidgetSpinner } from '@iconscout/react-unicons'
import { UilWrench } from '@iconscout/react-unicons'
import { UilBagAlt } from '@iconscout/react-unicons'
import { UilComments } from '@iconscout/react-unicons'
import { UilEnvelopeDownload } from '@iconscout/react-unicons'


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

const icons = [ 
  <UilEstate className="icon"/>,
  <UilUserCircle className="icon"/>,
  <UilFidgetSpinner className="icon"/>,
  <UilWrench className="icon"/>,
  <UilBagAlt className="icon"/>,
  <UilComments className="icon"/>,
  <UilEnvelopeDownload className="icon"/>,
]

const Navbar = ({ show, setShow }) => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <h1>Jibolacodes</h1>
        </Logo>
        <NavToggle onClick={() => setShow(!show)}>
          {show ? <UilTimes className="toggle-btn"/> : <UilBars className="toggle-btn"/>}
        </NavToggle>
      </Content>
      {show && (
        <NavLinks>
          <ul className="animate__animated animate__fadeInLeft">
            {navLinks.map((link, i) => (
              <li key={link}>
                {icons[i]}
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
