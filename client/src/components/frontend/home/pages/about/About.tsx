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

const renderText = (): any =>
  aboutText.map(
    (text: string): JSX.Element => (
      <Text key={uniqid()} as="p" className="default-paragraph">
        {text}
      </Text>
    )
  );

const renderImage = (): JSX.Element => <Image alt="img" src={img} />;

const text = renderText();
const image = renderImage();

const About = (): JSX.Element => {
  return (
    <SubContainer>
      <ContentContainer>
        <ContentContainer.TextSide>
          <Heading as="h2" className="default-heading">
            {headingText}
          </Heading>
          {text}
          <Link to="/onama" as={RouterLink}>
            {linkText}
          </Link>
        </ContentContainer.TextSide>
        <ContentContainer.ImageSide>{image}</ContentContainer.ImageSide>
      </ContentContainer>
    </SubContainer>
  );
};

export default About;
