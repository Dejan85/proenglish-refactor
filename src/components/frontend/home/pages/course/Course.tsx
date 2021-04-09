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
import { headingText, headingText2, text, text2 } from "./messages";
import img from "./images/img2.jpg";
import img2 from "./images/img.jpg";

const renderHeading = (text: string): JSX.Element => (
  <Heading as="h2" text={text} />
);

const renderText = (text: string): JSX.Element[] => <Text as="p" text={text} />;
const renderLink = (): JSX.Element => (
  <Link to="/onama" as={RouterLink} text="Pročitaj više" />
);
const renderImage = (): JSX.Element => <Image alt="img" src={img} />;
const renderImage2 = (): JSX.Element => <Image alt="img" src={img2} />;

const headingUi = renderHeading(headingText);
const headingUi2 = renderHeading(headingText2);
const textUi = renderText(text);
const textUi2 = renderText(text2);
const linkUi = renderLink();
const imageUi = renderImage();
const imageUi2 = renderImage2();

const Course = (): JSX.Element => {
  return (
    <>
      <ContentContainer>
        <ContentContainer.Wrapper>
          <ContentContainer.ImageSide>{imageUi}</ContentContainer.ImageSide>
          <ContentContainer.TextSide>
            {headingUi}
            {textUi}
            {linkUi}
          </ContentContainer.TextSide>
        </ContentContainer.Wrapper>

        <ContentContainer.Wrapper>
          <ContentContainer.TextSide>
            {headingUi2}
            {textUi2}
            {linkUi}
          </ContentContainer.TextSide>
          <ContentContainer.ImageSide>{imageUi2}</ContentContainer.ImageSide>
        </ContentContainer.Wrapper>
      </ContentContainer>
    </>
  );
};

export default Course;
