import React from "react";
import { SectionContainer, Section, Column, Content, Title, Text, StyledItalicTitle, StyledLowerTitle, StyledTitle, StyledTitleLink } from './Section.styles';
import { Trans } from 'react-i18next';

interface Section {
  id?: number;
  title?: string;
  italicTitle?: string;
  lowerTitle?: string;
  lowerTitleUrl?: string;
  link?: string;
  text?: string;
  content?: any; // Allows flexible content like images, links, etc.
}

interface SectionListProps {
  sections: Section[];
}

const SectionList: React.FC<SectionListProps> = ({ sections }) => {
  return (
    <SectionContainer>
      {sections.map((section) => (
        <Section key={section.id}>
          <Column>
            <Title>
              {/* <a href={section.link} target="_blank" rel="noopener noreferrer">
                {section.title}
              </a> */}
              <StyledTitle>
                {section.title}
              </StyledTitle>
              <StyledItalicTitle>
                {section.italicTitle}
              </StyledItalicTitle>
              <StyledLowerTitle>
                {section.lowerTitle}
              </StyledLowerTitle>
              {section.lowerTitleUrl && 
                <StyledTitleLink>
                  {section.lowerTitleUrl}
                </StyledTitleLink>
              }
            </Title>
          </Column>
          <Column>
            <Text >
            {/* <Trans i18nKey={section.text} /> */}
            <div dangerouslySetInnerHTML={{ __html: section.text || 'string'}}/>
            </Text>
          </Column>
          <Column>
            <Content>{section.content}</Content>
          </Column>
        </Section>
      ))}
    </SectionContainer>
  );
};

export default SectionList;