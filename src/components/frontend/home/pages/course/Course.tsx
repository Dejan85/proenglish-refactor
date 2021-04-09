import React from "react";
import {
  ContentContainer,
  SubContainer,
  Text,
  Heading,
  Image,
  Link,
} from "~/src/components/ui";
import { Link as RouterLink } from "react-router-dom";

const Course = (): JSX.Element => {
  return (
    <ContentContainer>
      <ContentContainer.ImageSide>image place</ContentContainer.ImageSide>

      <ContentContainer.TextSide></ContentContainer.TextSide>
    </ContentContainer>
  );
};

export default Course;
