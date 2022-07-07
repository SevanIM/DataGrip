import {
  Container,
  Date,
  Logo,
  TextSection,
  Details,
  LogoContainer,
  MoreInfo,
  Source,
} from "./BreachDetailsStyled";

export const BreachDetails = ({ data }) => {
  const { date, details, link, source } = data;
  const more = "For more info click here";
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <TextSection>
        <Source>{source}</Source>
        <Date>{date}</Date>
        <Details>{details}</Details>
        <MoreInfo target="_blank" href={link}>
          {more}
        </MoreInfo>
      </TextSection>
    </Container>
  );
};
