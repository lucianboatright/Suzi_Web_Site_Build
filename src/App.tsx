import React, { useEffect, useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Section from './Section/Section';
import * as logo1 from './assets/images/SuziPic1.jpg';
import { GlobalStyles } from './GlobalStyles';
import { sections } from './Data/sectionData';
import { AboutSections } from './Data/headingData';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// const AppContainer = styled.img({
//   display: 'flex',
//   // flex-direction: column;
//   gridTemplateRows: "auto 1fr auto",
//   minHeight: '100v',
//   });


const App: React.FC = () => {

    const [activeFilter, setActiveFilter] = useState<string>("ALL");
    const [activeAbout, setActiveAbout] = useState<any>(null);
  
    const filteredSections = activeFilter === "ALL" ? sections : sections.filter(section => section.category === activeFilter);
    const filteredHeaderSection = AboutSections.find((AboutSection) => AboutSection.category === activeAbout);
    
    const theme = {
      fontFamily: "'Typewriter', sans-serif", 
    };

  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
    <GlobalStyles />
    
      <AppContainer>
          <Header
            filteredHeaderSection={filteredHeaderSection}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onPageChange={setActiveAbout}
            activeAbout={activeAbout}
          />
  
        <Section sections={filteredSections} />
        <Footer />
      </AppContainer>
       </React.Fragment>
     </ThemeProvider>
  );
};

export default App;
