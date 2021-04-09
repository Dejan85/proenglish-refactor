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

const renderHeading = (text: string): JSX.Element => (
  <Heading as="h2" text={text} className="default-heading" />
);

const renderText = (text: string): JSX.Element[] | JSX.Element => (
  <Text as="p" text={text} className="default-paragraph" />
);
const renderLink = (text: string): JSX.Element => (
  <Link to={linkPath} as={RouterLink} text={text} />
);
const renderImage = (img: string): JSX.Element => <Image alt="img" src={img} />;

const headingUi = renderHeading(headingText);
const headingUi2 = renderHeading(headingText2);
const textUi = renderText(text);
const textUi2 = renderText(text2);
const linkUi = renderLink(linkText);
const linkUi2 = renderLink(linkText2);
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
          {headingUi}
          {textUi}
          {linkUi}
        </ContentContainer.TextSide>
      </ContentContainer>
      <ContentContainer className="reset-margin-top set-height-to-55-rem">
        <ContentContainer.TextSide
          wrapContentToLeft
          className="set-width-to-50-percent"
        >
          {headingUi2}
          {textUi2}
          {linkUi2}
        </ContentContainer.TextSide>
        <ContentContainer.ImageSide className="set-width-to-50-percent">
          {imageUi2}
        </ContentContainer.ImageSide>
      </ContentContainer>
    </>
  );
};

export default Course;
