
  import styled from "styled-components";
import MiddleFinger from '../../public/logos/';

export const HeaderContainer = styled.header({
  fontFamily: 'Typewriter Condensed',
  gap: "10px", 
  marginRight: "20px",
  borderBottom: "1px solid #ccc",
  marginLeft: "5px",
  padding: "5px",
  
  "@media (min-width: 1000px)": {
    display: "grid",
    marginTop: "20px",
    marginRight: "20px",
    marginLeft: "20px",
    padding: "0px",
    gridTemplateRows: "none",
    gridTemplateColumns: "1fr 2fr 3fr", 
  },
});


export const FilterContainer = styled.div({
  marginBottom: '1rem',
  "@media (min-width: 1000px)": {
    marginBottom: '0rem',
    display: "flex", 
    },
});

export const StyledButton = styled.div({
  cursor: `url(${MiddleFinger}), pointer`,
  display: 'inline-block',    
  fontFamily: '"Typewriter", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.75)",
  fontSize: "1.35rem",
  lineHeight: "1.3",
  letterSpacing: "0",
  marginRight: '10px',
  "@media (min-width: 1000px)": {
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.75)",
      fontSize: "1.35rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
  });

export const StyledTitle = styled.h1({
    display: "flex",
      fontFamily: '"Typewriter", sans-serif',
      fontWeight: 700,
      margin: "0",
      fontSize: "2.2rem",
      lineHeight: "0.9",
      color: "rgba(0, 0, 0, 0.85)",
      letterSpacing: "-0.069em",
      marginBottom: '2rem',
      "@media (min-width: 1000px)": {
        marginBottom: '0rem',

      },
  });

export const StyledHeaderSection = styled.div({
    fontFamily: '"Typewriter", sans-serif',
    gridColumn: '3',  
    gridRow: '2',  
    lineHeight: "1.35",
    fontSize: "1.1rem",
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.6)",
    fontStyle: "normal",
    letterSpacing: "0em",
    marginBottom: 'none',
    marginLeft: 'none',
    "@media (min-width: 1000px)": {
      marginBottom: '4rem',
      maxWidth: '23rem',
      marginLeft: 'auto',
      minWidth: '21rem',
    },
  });

  export const LinksContainerBox = styled.div(() => ({
    textAlign: 'end',
    marginBottom: '1rem',
    marginTop: '1rem',
    display: 'inline-block',
    "@media (min-width: 1000px)": {
      marginTop: '0rem',
      display: 'grid',
      gridTemplateColumns: "5fr 1fr 1fr 1fr", 
      marginLeft: 'auto',
      marginBottom: '20px',
    },
  }));

  interface LinksContainerProps {
    activeAbout?: boolean; 
  }
  
  export const LinksContainer = styled.div<LinksContainerProps>((props) => ({
    cursor: `url(${MiddleFinger}), pointer`,  
    display: 'inline-block',    
    fontFamily: '"Typewriter", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.75)",
    fontSize: "1.1rem",
    lineHeight: "1.35",
    letterSpacing: "0",
    marginRight: '50px',
    marginBottom: '0.25rem',
    visibility: props.activeAbout ? "hidden" : "visible", 
    "@media (min-width: 1000px)": {
      textAlign: 'end',
      marginBottom: '0rem',
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.75)",
      fontSize: "1.1rem",
      lineHeight: "1.3",
      letterSpacing: "0",
      "&:last-child": {
        marginRight: "0", 
      },
      
    },
    "&:last-child": {
     marginRight: "3rem",
   },
   
  }));

export const StyledLogoContainer = styled.img({
  height: '10rem',
    gridColumn: '2',  
    gridRow: '2',  
    marginBottom: '1rem',
    "@media (min-width: 1000px)": {
      gridColumn: '2',  
    },
  });
  