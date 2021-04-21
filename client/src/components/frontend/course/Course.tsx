import React from "react";
import { ContentContainer, Link, Heading, Text } from "~/src/components/ui";
import background from "./images/background.jpg";
import { heading, text, textInSpan } from "./messages";
import uniqid from "uniqid";

const Course = () => {
  return (
    <ContentContainer className="course">
      <ContentContainer
        className="course__top-container"
        backgroundImage={background}
      >
        <ContentContainer className="course__right-content">
          <Link as="a" href="/" className="course__heading">
            Utvrdite nivo znanja
          </Link>

          <ContentContainer className="course__text-container">
            {text.map((text) => {
              return (
                <Text key={uniqid()} className="course__text" as="p">
                  {text}
                </Text>
              );
            })}
            <Text className="course__text course__text-span" as="span">
              {textInSpan}
            </Text>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
      <ContentContainer></ContentContainer>
    </ContentContainer>
  );
};

export default Course;
