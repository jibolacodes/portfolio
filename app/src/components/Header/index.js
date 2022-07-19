import React from 'react';
// Markup
import { Wrapper, Content, UserImg, Text, AnimatedText, DownloadBtn } from './Header.style'
// Images
import HeaderImg from '../../assets/Images/userImages/jibolacodes.jpg';

const Header = () => (
  <Wrapper>
    <Content>
      <UserImg src={HeaderImg} alt="Jibolacodes image" />
      <Text>
        <h3>I'm</h3>
        <h1>Ajibola Akindunbi</h1>
      </Text>
      <AnimatedText>Front-End Web Developer</AnimatedText>
      <DownloadBtn>
        <a href='#'>Download</a>
      </DownloadBtn>
    </Content>
  </Wrapper>
)

export default Header;