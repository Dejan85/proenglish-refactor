import React from "react";
import { WrapperType } from "~/src/global-types";
import {
  ContentContainer,
  SubContainer,
  Text,
  Heading,
} from "~/src/components/ui";
import { aboutText } from "./messages";
import uniqid from "uniqid";

const Wrapper: WrapperType = "div";
const className: string = "about";

const generateText = (): JSX.Element[] =>
  aboutText.map((text) => (
    <Text key={uniqid()} as="p" text={text} className="about" />
  ));

const text = generateText();

const About = () => {
  return (
    <SubContainer>
      <Wrapper className={className}>
        <ContentContainer>{text}</ContentContainer>
      </Wrapper>
    </SubContainer>
  );
};

export default About;
