import React from 'react';
// Markup
import { Wrapper, Content, UserImg, Info, Text, AnimatedText, DownloadBtn, Arrow } from './Header.style'
// Images
import HeaderImg from '../../assets/Images/userImages/jibolacodes.jpg';
import ArrowDown from '../../assets/Images/icons/angle-double-down.svg'
import DownloadIcon from '../../assets/Images/icons/import.svg'

const Header = () => (
  <Wrapper>
    <Content>
      <UserImg src={HeaderImg} alt="Jibolacodes image" />

      <Info>
        <Text>
          <h3>I'm</h3>
          <h1>Ajibola Akindunbi</h1>
        </Text>
        <AnimatedText>Front-End Web Developer</AnimatedText>
        <DownloadBtn>
          <a href='#'>Download CV</a>
          <img 
            style={
              {
                'width': '20px',
                'marginLeft': '15px',
                'position': 'relative',
                'top':'2px'
              }
            } 
            src={DownloadIcon} 
            alt="download icon" 
            />
        </DownloadBtn>
      </Info>
      
    </Content>
    <Arrow src={ArrowDown} alt='Arrow Down' />
  </Wrapper>
)

export default Header;