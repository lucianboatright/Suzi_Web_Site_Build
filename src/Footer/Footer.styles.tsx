import styled from "styled-components";

export const FooterContainer = styled.footer({
  fontFamily: '"Typewriter", sans-serif',
  
  paddingLeft: "20px",
  paddingRight: "20px",
  textAlign: "left",
  lineHeight: "1.35",
  fontSize: "1.3rem",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.6)",
  fontStyle: "normal",
  letterSpacing: "0em",
  
  "@media (min-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "1fr 2fr 1fr", 
    },
  });

export const StyledLogoContainerFooter = styled.img({
  fontFamily: '"Typewriter", sans-serif',
  display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    height: '3rem',
    marginBottom: '1rem',
    
    "@media (min-width: 768px)": {
      height: '5rem',
 
    },

  });

export const StyledFooterItalics = styled.div({
  fontStyle: 'italic',
  display: "grid",
  });
