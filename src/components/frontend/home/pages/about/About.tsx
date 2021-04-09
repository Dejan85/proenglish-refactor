import React from "react";
import {
  ContentContainer,
  SubContainer,
  Text,
  Heading,
  Image,
  Button,
} from "~/src/components/ui";
import { aboutText } from "./messages";
import uniqid from "uniqid";
import img from "./images/img.jpg";

const className: string = "about";

const renderText = (): JSX.Element[] =>
  aboutText.map((text: string) => (
    <Text key={uniqid()} as="p" text={text} className={className} />
  ));
const renderButton = (): JSX.Element => <Button />;
const renderImage = (): JSX.Element => <Image alt="img" src={img} />;

const text = renderText();
const button = renderButton();
const image = renderImage();

const About = (): JSX.Element => {
  return (
    <SubContainer>
      <ContentContainer>
        <ContentContainer.TextSide>
          <Heading as="h2" text="Ko smo mi?" className={className} />
          {text}
          {button}
        </ContentContainer.TextSide>
        <ContentContainer.ImageSide>{image}</ContentContainer.ImageSide>
      </ContentContainer>
    </SubContainer>
  );
};

export default About;
