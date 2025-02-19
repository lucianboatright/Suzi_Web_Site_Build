import { createGlobalStyle } from "styled-components";

import TypewriterWoff2 from './assets/fonts/typewriter-condensed/typewcond_regular.woff2';
import TypewriterTtf from './assets/fonts/typewriter-condensed/typewcond_regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Typewriter';
    src: url(${TypewriterWoff2}) format('woff2'),
         url(${TypewriterTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Typewriter', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
