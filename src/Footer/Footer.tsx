import React from 'react';
import { FooterContainer, StyledFooterItalics, StyledLogoContainerFooter } from './Footer.styles';
import SuziLogo from '../assets/images/SUZIPROFILE-removebg-preview.png';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <div style={{paddingBottom: '1rem'}}>©2025</div>
            <div>
              <div>SUZY GASZCZAK</div>
              <StyledLogoContainerFooter src={SuziLogo} alt="SuziLogo" />
            </div>
            <div>
              <StyledFooterItalics>Human beings are faulty creatures.</StyledFooterItalics>
              <div>(Suzy Gaszczak)</div>
            </div>
      </FooterContainer>
    )
  };
  
  export default Footer;