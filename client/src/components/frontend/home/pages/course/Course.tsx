import React from "react";
import "./styles.scss";
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

const MemoizedUi: JSX.Element = (
  <>
    <ContentContainer className="home-course">
      <ContentContainer className="home-course__left-image-container">
        {imageUi}
      </ContentContainer>
      <ContentContainer className="home-course__right-text-container">
        <ContentContainer className="home-course__right-text">
          <Heading as="h2" className="default-heading">
            {headingText}
          </Heading>
          <Text as="p" className="default-paragraph">
            {text}
          </Text>
          <Link className="home-about__link" to={linkPath} as={RouterLink}>
            {linkText}
          </Link>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>

    <ContentContainer className="home-course home-course--no-margin-top">
      <ContentContainer className="home-course__left-text-container">
        <ContentContainer className="home-course__left-text">
          <Heading as="h2" className="default-heading">
            {headingText2}
          </Heading>
          <Text as="p" className="default-paragraph">
            {text2}
          </Text>
          <Link className="home-about__link" to={linkPath} as={RouterLink}>
            {linkText2}
          </Link>
        </ContentContainer>
      </ContentContainer>
      <ContentContainer className="home-course__right-image-container">
        {imageUi2}
      </ContentContainer>
    </ContentContainer>
  </>
);

const Course = (): JSX.Element => MemoizedUi;

export default Course;
