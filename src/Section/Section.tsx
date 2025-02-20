import React from "react";
import { SectionContainer, Section, Column, Content, Title, Text, StyledItalicTitle, StyledLowerTitle, StyledTitle, StyledTitleLink } from './Section.styles';

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
  {console.log(sections
  )}
  return (
    <SectionContainer>
      {sections.map((section) => (
        <Section key={section.id}>
          <Column>
            <Title>
              <StyledTitle>
                {section.title}
              </StyledTitle>
              <StyledItalicTitle>
                {section.italicTitle}
              </StyledItalicTitle>
              <StyledLowerTitle>
                {section.lowerTitle}
              </StyledLowerTitle>
              {/* {section.lowerTitleUrl &&  */}
                <StyledTitleLink>
                  {/* {section.lowerTitleUrl} */}
              <a target="_blank" rel="noopener noreferrer" href={section.lowerTitleUrl}>{section.lowerTitleUrl}</a>
                </StyledTitleLink>
              {/* } */}
            </Title>
          </Column>
          <Column>
            <Text >
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