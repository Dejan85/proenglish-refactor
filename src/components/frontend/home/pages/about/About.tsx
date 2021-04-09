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
  aboutText.map((text: string) => (
    <Text key={uniqid()} as="p" text={text} className="about" />
  ));

const text = generateText();

const About = () => {
  return (
    <SubContainer>
      <Wrapper className={className}>
        <ContentContainer>
          <ContentContainer.TextSide>
            <Heading as="h2" text="Ko smo mi?" className="about" />
            {text}
          </ContentContainer.TextSide>
          <ContentContainer.ImageSide>
            Ovde ide slika
          </ContentContainer.ImageSide>
        </ContentContainer>
      </Wrapper>
    </SubContainer>
  );
};

export default About;
