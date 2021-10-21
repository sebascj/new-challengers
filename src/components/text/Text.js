import styled from "styled-components";
const TitleComponent = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 4.2rem;
  color: var(--text-gray);
  margin: 0 0 2rem 0;
  @media screen and (max-width: 900px) {
    font-size: 3.2em;
  }
`;
const SubtitleComponent = styled.h2`
  font-family: "Hind Vadodara", sans-serif;
  font-size: 2.3rem;
  color: var(--text-gray);
  @media screen and (max-width: 900px) {
    font-size: 1.3em;
  }
`;
const ParagraphComponent = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.33rem;
  color: var(--text-gray);
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
`;

const Title = ({ children }) => {
  return <TitleComponent>{children}</TitleComponent>;
};
const Subtitle = ({ className, children }) => {
  return (
    <SubtitleComponent className={className}>{children}</SubtitleComponent>
  );
};
const Paragraph = ({ children }) => {
  return <ParagraphComponent>{children}</ParagraphComponent>;
};

export { Title, Subtitle, Paragraph };
