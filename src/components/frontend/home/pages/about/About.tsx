import React from "react";
import { WrapperType } from "~/src/global-types";
import {
  ContentContainer,
  SubContainer,
  Text,
  Heading,
  Image,
} from "~/src/components/ui";
import { aboutText } from "./messages";
import uniqid from "uniqid";
import img from "./images/img.jpg";

const className: string = "about";

const generateText = (): JSX.Element[] =>
  aboutText.map((text: string) => (
    <Text key={uniqid()} as="p" text={text} className={className} />
  ));

const text = generateText();

const About = () => {
  return (
    <SubContainer>
      <ContentContainer>
        <ContentContainer.TextSide>
          <Heading as="h2" text="Ko smo mi?" className={className} />
          {text}
        </ContentContainer.TextSide>
        <ContentContainer.ImageSide>
          <Image alt="img" src={img} />
        </ContentContainer.ImageSide>
      </ContentContainer>
    </SubContainer>
  );
};

export default About;
