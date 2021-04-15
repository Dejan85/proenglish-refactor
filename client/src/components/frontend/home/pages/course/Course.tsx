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

const MemoizedUi: JSX.Element = (
  <>
    <ContentContainer height="55rem" marginTop="10rem" className="box-shadow">
      <ContentContainer width="50%">{imageUi}</ContentContainer>
      <ContentContainer width="50%">
        <ContentContainer
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-evenly"
          maxWidth="60rem"
          height="100%"
          paddingLeft="5rem"
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
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>

    <ContentContainer height="55rem" className="box-shadow">
      <ContentContainer width="50%" justifyContent="flex-end">
        <ContentContainer
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
          maxWidth="60rem"
          height="100%"
          paddingRight="5rem"
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
        </ContentContainer>
      </ContentContainer>
      <ContentContainer width="50%">{imageUi2}</ContentContainer>
    </ContentContainer>
  </>
);

const Course = (): JSX.Element => MemoizedUi;

export default Course;
