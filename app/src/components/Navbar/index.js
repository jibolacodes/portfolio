import React from 'react';

//Styles
import { Wrapper, Content, LogoImg, navLinks, navToggle } from './Navbar.style';

// Images
import Logo from '../../assets/Images/logos/jc_logo_dark.png'

const Navbar = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Logo} alt="logo" />
            <h1>Hi there</h1>
        </Content>
    </Wrapper>
)

export default Navbar;