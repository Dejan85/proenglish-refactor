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

const className: string = "about";

const renderText = (): JSX.Element[] =>
  aboutText.map((text: string) => (
    <Text key={uniqid()} as="p" text={text} className={className} />
  ));
const renderLink = (): JSX.Element => (
  <Link to="/onama" as={RouterLink} text="Pročitaj više" />
);
const renderImage = (): JSX.Element => <Image alt="img" src={img} />;

const text = renderText();
const LinkUi = renderLink();
const image = renderImage();

const About = (): JSX.Element => {
  return (
    <SubContainer>
      <ContentContainer>
        <ContentContainer.TextSide>
          <Heading as="h2" text="Ko smo mi?" className={className} />
          {text}
          {LinkUi}
        </ContentContainer.TextSide>
        <ContentContainer.ImageSide>{image}</ContentContainer.ImageSide>
      </ContentContainer>
    </SubContainer>
  );
};

export default About;
