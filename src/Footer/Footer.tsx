import React from 'react';
import { FooterContainer, StyledContainerFooter, StyledFooterBracketed, StyledFooterItalics, StyledLogoContainerFooter } from './Footer.styles';
import SuziLogo from '../assets/images/SUZIPROFILE-removebg-preview.png';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <div style={{paddingBottom: '1rem'}}>©2025</div>
            <StyledContainerFooter>
              <div>SUZY GASZCZAK</div>
              <StyledLogoContainerFooter src={SuziLogo} alt="SuziLogo" />
            </StyledContainerFooter>
            <div>
              <StyledFooterItalics>Human beings are faulty creatures.</StyledFooterItalics>
              <StyledFooterBracketed>(Suzy Gaszczak)</StyledFooterBracketed>
            </div>
      </FooterContainer>
    )
  };
  
  export default Footer;