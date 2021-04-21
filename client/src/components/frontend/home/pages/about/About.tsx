import React from "react";
import "./styles.scss";
import {
  ContentContainer,
  SubContainer,
  Text,
  Heading,
  Image,
  Link,
} from "~/src/components/ui";
import { aboutText, headingText, linkText } from "./messages";
import uniqid from "uniqid";
import img from "./images/img.jpg";
import { Link as RouterLink } from "react-router-dom";

const MemoizedUi: JSX.Element = (
  <SubContainer className="home-about">
    <ContentContainer className="home-about__content">
      <ContentContainer className="home-about__text">
        <Heading as="h2" className="home-about__heading">
          {headingText}
        </Heading>
        {aboutText.map(
          (text: string): JSX.Element => (
            <ContentContainer
              className="home-about__text--container"
              key={uniqid()}
            >
              <Text as="p" className="default-paragraph">
                {text}
              </Text>
            </ContentContainer>
          )
        )}
        <Link to="/onama" as={RouterLink}>
          {linkText}
        </Link>
      </ContentContainer>
      <ContentContainer className="home-about__image-container">
        <Image className="home-about__image" alt="img" src={img} />
      </ContentContainer>
    </ContentContainer>
  </SubContainer>
);

const About = (): JSX.Element => MemoizedUi;

export default About;
