import React from 'react';

// Markup
import { Wrapper, Content, UserImg, Info, Text, AnimatedText, DownloadBtn, Arrow } from './Header.style';

// Images
import HeaderImg from '../../images/jibolacodes.jpg';
import ArrowDown from '../../images/angle-double-down.svg';

const Header = ({ scrollHeight }) => (
  <Wrapper id='home'>
    <Content>
      <UserImg src={HeaderImg} alt="Jibolacodes image" />

      <Info>
        <Text>
          <h3>I'm</h3>
          <h1>Ajibola Akindunbi</h1>
          <p style={{color: 'white'}}>{scrollHeight}</p>
        </Text>
        <AnimatedText>Front-End Web Developer</AnimatedText>
        <DownloadBtn>
          <a href='#download'>Download CV</a>
        </DownloadBtn>
      </Info>
      
    </Content>
    <Arrow src={ArrowDown} alt='Arrow Down' />
  </Wrapper>
)

export default Header;