import React from 'react';
import { FilterContainer, HeaderContainer, LinksContainer, LinksContainerBox, StyledButton, StyledHeaderSection, StyledLogoContainer, StyledTitle } from './Header.styles';
import SuziLogo from '../assets/images/SUZIPROFILE-removebg-preview.png';

interface filteredHeaderProps {
  id: number;
  category: string;
  body: any;
}

interface HeaderProps {
    onFilterChange: (filter: string) => void;
    onPageChange: (page: string | null) => void;
    filteredHeaderSection?: filteredHeaderProps;
    activeFilter: string;
    activeAbout: string;
}
  
  const Header: React.FC<HeaderProps> = ({ onFilterChange, onPageChange, filteredHeaderSection, activeFilter, activeAbout }) => {

    return (
      <>
        <HeaderContainer>
            <StyledTitle>SUZY GASZCZAK</StyledTitle>
            <FilterContainer>
              <StyledButton>+</StyledButton>
              <StyledButton onClick={() => onFilterChange("ARCHITECTURAL")}>ARCHITECTURAL</StyledButton>
              <StyledButton>+</StyledButton>
              <StyledButton onClick={() => onFilterChange("SPATIAL")}>SPATIAL</StyledButton>
              <StyledButton>+</StyledButton>
              <StyledButton onClick={() => onFilterChange("URBAN")}>URBAN</StyledButton>
              <StyledButton>+</StyledButton>
              <StyledButton onClick={() => onFilterChange("GRAPHIC")}>GRAPHIC</StyledButton>
              <StyledButton>+</StyledButton>
              <StyledButton onClick={() => onFilterChange("ALL")}>...DESIGN</StyledButton>
            </FilterContainer>
            <LinksContainerBox>
              <LinksContainer onClick={() => onPageChange("About")}>ABOUT</LinksContainer>
              {/* <LinksContainer onClick={() => onPageChange("CV")}>CV</LinksContainer> */}
              <LinksContainer onClick={() => onPageChange("Contact")}>CONTACT</LinksContainer>
              <LinksContainer activeAbout={!activeAbout} onClick={() => onPageChange(null)}>X</LinksContainer>
            </LinksContainerBox>

            {/* {filteredHeaderSection && (  */}
                  <StyledLogoContainer src={SuziLogo} alt="SuziLogo" />
            {/* )}  */}
            {filteredHeaderSection && ( 
                <StyledHeaderSection >
                  {/* <div style={{ marginLeft: 'auto'}} dangerouslySetInnerHTML={{ __html: filteredHeaderSection.body }}>{filteredHeaderSection.body}</div> */}
                  <div dangerouslySetInnerHTML={{ __html: filteredHeaderSection.body }} />
                </StyledHeaderSection>
            )} 
          
        </HeaderContainer>
      </>
    );
  };

  export default Header;
