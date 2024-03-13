import {CenterContainer, GetStartedLink, MainContainer,
    StyledBall, StyledDescription, StyledTitle, TextContainer} from "@/app/styledHome";

export default function Home() {
  return (
      <MainContainer>
          <CenterContainer>
              <TextContainer>
                  <StyledTitle>Try the power of Next JS</StyledTitle>
                  <StyledDescription>A demo web application that will inspire you to create your own project !</StyledDescription>
                  <GetStartedLink href={'/auto'}>Get started</GetStartedLink>
              </TextContainer>
              <StyledBall/>
          </CenterContainer>
      </MainContainer>
  );
}
