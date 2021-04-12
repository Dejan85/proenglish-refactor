import React from "react";
import {
  ContentContainer,
  Text,
  Heading,
  Image,
  Link,
} from "~/src/components/ui";
import { Link as RouterLink } from "react-router-dom";
import {
  headingText,
  headingText2,
  text,
  text2,
  linkText,
  linkText2,
  linkPath,
} from "./messages";
import img from "./images/img2.jpg";
import img2 from "./images/img.jpg";

const renderImage = (img: string): JSX.Element => <Image alt="img" src={img} />;

const imageUi = renderImage(img);
const imageUi2 = renderImage(img2);

const Course = (): JSX.Element => {
  return (
    <>
      <ContentContainer className="set-height-to-55-rem box-shadow">
        <ContentContainer.ImageSide className="set-width-to-50-percent">
          {imageUi}
        </ContentContainer.ImageSide>
        <ContentContainer.TextSide
          wrapContentToRight
          className="set-width-to-50-percent"
        >
          <Heading as="h2" className="default-heading">
            {headingText}
          </Heading>
          <Text as="p" className="default-paragraph">
            {text}
          </Text>
          <Link to={linkPath} as={RouterLink}>
            {linkText}
          </Link>
        </ContentContainer.TextSide>
      </ContentContainer>
      <ContentContainer className="reset-margin-top set-height-to-55-rem box-shadow">
        <ContentContainer.TextSide
          wrapContentToLeft
          className="set-width-to-50-percent"
        >
          <Heading as="h2" className="default-heading">
            {headingText2}
          </Heading>
          <Text as="p" className="default-paragraph">
            {text2}
          </Text>
          <Link to={linkPath} as={RouterLink}>
            {linkText2}
          </Link>
        </ContentContainer.TextSide>
        <ContentContainer.ImageSide className="set-width-to-50-percent">
          {imageUi2}
        </ContentContainer.ImageSide>
      </ContentContainer>
    </>
  );
};

export default Course;
