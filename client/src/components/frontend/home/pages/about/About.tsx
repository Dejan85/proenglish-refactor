import React from "react";
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
  <SubContainer>
    <ContentContainer>
      <ContentContainer.TextSide>
        <Heading as="h2" className="default-heading">
          {headingText}
        </Heading>
        {aboutText.map(
          (text: string): JSX.Element => (
            <Text key={uniqid()} as="p" className="default-paragraph">
              {text}
            </Text>
          )
        )}
        <Link to="/onama" as={RouterLink}>
          {linkText}
        </Link>
      </ContentContainer.TextSide>
      <ContentContainer.ImageSide>
        <Image alt="img" src={img} />
      </ContentContainer.ImageSide>
    </ContentContainer>
  </SubContainer>
);

const About = (): JSX.Element => MemoizedUi;

export default About;
