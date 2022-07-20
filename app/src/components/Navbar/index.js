import React from "react";

// Markup
import { Wrapper, Content, LogoImg, NavLinks, NavToggle } from "./navbar.style";

// Image
import Logo from "../../assets/Images/logos/jc_logo_light.png";
import CloseBtn from "../../assets/Images/icons/times.svg";
import OpenBtn from "../../assets/Images/icons/bars.svg";

const navLinks = ['home', 'about', 'education', 'skills', 'portfolio', 'contact'];

const Navbar = () => (
  <Wrapper>
    <Content>
      <h1>Jibolacodes</h1>
      <NavToggle>
        <img src={CloseBtn} alt="Close button" />
        <img src={OpenBtn} alt="Open button" />
      </NavToggle>
    </Content>
    <NavLinks>
      <ul>
        {
          navLinks.map(link => (
            <li key={link}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))
        }
      </ul>
    </NavLinks>
  </Wrapper>
);

export default Navbar;
