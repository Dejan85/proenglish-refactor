import React from "react";
import {
  ContentContainer,
  SubContainer,
  Text,
  Heading,
  Image,
  Link,
} from "~/src/components/ui";
import { aboutText } from "./messages";
import uniqid from "uniqid";
import img from "./images/img.jpg";
import { Link as RouterLink } from "react-router-dom";

const renderHeading = (): JSX.Element => (
  <Heading as="h2" text="Ko smo mi?" className="default-heading" />
);

const renderText = (): any =>
  aboutText.map(
    (text: string): JSX.Element => (
      <Text key={uniqid()} as="p" text={text} className="default-paragraph" />
    )
  );
const renderLink = (): JSX.Element => (
  <Link to="/onama" as={RouterLink} text="Pročitaj više" />
);
const renderImage = (): JSX.Element => <Image alt="img" src={img} />;

const heading = renderHeading();
const text = renderText();
const linkUi = renderLink();
const image = renderImage();

const About = (): JSX.Element => {
  return (
    <SubContainer>
      <ContentContainer>
        <ContentContainer.TextSide>
          {heading}
          {text}
          {linkUi}
        </ContentContainer.TextSide>
        <ContentContainer.ImageSide>{image}</ContentContainer.ImageSide>
      </ContentContainer>
    </SubContainer>
  );
};

export default About;
