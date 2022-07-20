import React from "react";

// Markup
import { Wrapper, Content, LogoImg, NavLinks, NavToggle } from "./navbar.style";

// Image
import Logo from "../../assets/Images/logos/jc_logo_dark.png";

const navLinks = ['home', 'about', 'education', 'skills', 'portfolio', 'contact'];

const Navbar = () => (
  <Wrapper>
    <Content>
      <LogoImg src={Logo} alt="" />
      <NavToggle />
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
