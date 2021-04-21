import React from "react";
import { ContentContainer, Link, Heading } from "~/src/components/ui";
import background from "./images/background.jpg";
import { heading, text, textInSpan } from "./messages";

const Course = () => {
  return (
    <ContentContainer className="course">
      <ContentContainer
        className="course__top-container"
        backgroundImage={background}
      >
        <ContentContainer className="course__right-content">
          <Heading as="h1" className="course__heading">
            Utvrdite nivo znanja
          </Heading>
        </ContentContainer>
      </ContentContainer>
      <ContentContainer></ContentContainer>
    </ContentContainer>
  );
};

export default Course;
