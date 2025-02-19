import styled from "styled-components";

// RGBA(0,0,0,0.85)

export const SectionContainer = styled.div({
    fontFamily: '"Typewriter", sans-serif',
  display: "flex",
  flexDirection: "column",
  paddingRight: "20px",
  paddingLeft: "20px",
  
});

export const Section = styled.div({
  paddingBottom: '4rem',
    fontFamily: '"Typewriter", sans-serif',
  gap: "20px",
  paddingTop: "20px",
  borderBottom: "1px solid #ccc",
  "@media (min-width: 1000px)": {
 
    display: "grid",
    gridTemplateColumns: "1fr 3fr 3fr", 
  },
});

export const Column = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const Title = styled.div({
    fontFamily: '"Typewriter", sans-serif',
  fontWeight: "bold",
  fontSize: "1rem",
  marginBottom: "10px",
});

export const Text = styled.div({
    fontFamily: '"Typewriter", sans-serif',
  lineHeight: "1.35",
  fontSize: "1.1rem",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.6)",
  fontStyle: "normal",
  letterSpacing: "0em",
  display: 'block',
});

export const Content = styled.div({
    fontFamily: '"Typewriter", sans-serif',
    display: "flex",
});

export const StyledTitle = styled.div({
    fontFamily: '"Typewriter", sans-serif',
    fontWeight: 400,
    margin: "0",
    color: "rgba(0, 0, 0, 0.75)",
    fontSize: "1.1rem",
    lineHeight: "1.3",
    letterSpacing: "0",
});

export const StyledItalicTitle = styled.div({
    fontFamily: '"Typewriter", sans-serif',
  display: "flex",
  fontStyle: 'italic',
  fontWeight: 400,
  margin: "0",
  color: "rgba(0, 0, 0, 0.75)",
  fontSize: "1.1rem",
  lineHeight: "1.3",
  letterSpacing: "0",
});

export const StyledLowerTitle = styled.div({
    fontFamily: '"Typewriter", sans-serif',
  display: "flex",
  fontWeight: 400,
  margin: "0",
  color: "rgba(0, 0, 0, 0.75)",
  fontSize: "1.1rem",
  lineHeight: "1.3",
  letterSpacing: "0",
  marginTop: '2rem',
  marginBottom: '1rem',
});

export const StyledTitleLink = styled.div({
    fontFamily: '"Typewriter", sans-serif',
  display: "flex",
  fontWeight: 400,
  "& a": {
    color: "rgba(0, 0, 0, 0.75)",
    lineHeight: "1.1rem",
    letterSpacing: "0",
    textDecoration: 'none',
    fontSize: "1.1rem",
  }
});