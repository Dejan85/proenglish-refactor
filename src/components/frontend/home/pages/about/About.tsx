import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainer, Text, Heading } from "~/src/components/ui";

const Wrapper: WrapperType = "div";
const className: string = "about";

const About = () => {
  return (
    <Wrapper className={className}>
      <ContentContainer></ContentContainer>
    </Wrapper>
  );
};

export default About;
