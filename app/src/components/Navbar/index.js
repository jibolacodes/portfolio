// Markup
import { Wrapper, Content, NavLinks, NavToggle } from "./navbar.style";

// Image
import CloseBtn from "../../assets/Images/icons/times.svg";
import OpenBtn from "../../assets/Images/icons/bars.svg";

const navLinks = [
  "home",
  "about",
  "education",
  "skills",
  "portfolio",
  "contact",
];

const Navbar = ({ show, setShow }) => {

  return (
    <Wrapper>
      <Content>
        <h1>Jibolacodes</h1>
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
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </NavLinks>
      )}
    </Wrapper>
  );
};

export default Navbar;
