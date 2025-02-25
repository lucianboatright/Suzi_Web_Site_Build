import styled from "styled-components";

import customeCourser from '../assets/smallMiddleFinger.png'

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
    gridTemplateColumns: "15% 30% 52%", 
  },
});

export const Column = styled.div({
  // display: "flex",
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
    '&:hover': {
      fontWeight: 700,
      cursor: `${customeCourser}`,
    },
  }
});

export const StyledSectionLink = styled.div({
  fontFamily: '"Typewriter", sans-serif',
display: "flex",
"& a": {
  fontWeight: 100,
  width: '5rem',
  color: "rgba(0, 0, 0, 0.75)",
  lineHeight: "1.1rem",
  letterSpacing: "0",
  textDecoration: 'none',
  fontSize: "1.1rem",
  '&:hover': {
    fontWeight: 700,
    cursor: `${customeCourser}`,
  },
}
});

export const StyledFlexSpacedSection = styled.div({
  display: 'initial',
"@media (min-width: 1000px)": {
  display: 'flex',
  justifyContent: 'space-between'
  },
});

export const StyledFlexSection = styled.div({
  display: 'initial',
"@media (min-width: 1000px)": {
  display: 'flex',
  },
});

export const StyledRubySection = styled.div({
  display: 'initial',
"@media (min-width: 1000px)": {
  display: 'ruby',
  },
});

export const ZarriBeerLabsFirst = styled.div({
marginTop: '0rem',
float: 'left',
"@media (min-width: 1000px)": {
    marginTop: '8rem',
  },
});
export const ZarriBeerLabsSecond = styled.div({
marginTop: '0rem',
float: 'right',
"@media (min-width: 1000px)": {
    // marginTop: '16rem',
  },
});