import React from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  Image,
  Loading,
} from "~/src/components/ui";
import background from "../images/background.jpg";
import background2 from "../images/background2.jpg";
import image from "../images/image.jpg";
import image2 from "../images/image2.jpg";
import { UiRenderProps } from "../types";
import parse from "html-react-parser";
import uniqid from "uniqid";

const UiRender = (props: UiRenderProps) => {
  const { aboutData } = props;
  const firstSection = (aboutData && aboutData[0]) || {
    title: "",
    description: "",
    body: "",
  };

  const { title, body } = (aboutData && aboutData[0]) || {
    title: "",
    body: "",
  };

  const { title: title2, body: body2 } = (aboutData && aboutData[1]) || {
    title: "",
    body: "",
  };

  console.log("test", firstSection);

  return (
    <ContentContainer className="about">
      <ContentContainer
        className="about__background"
        backgroundImage={background}
      />

      <SubContainer key={uniqid()} className="about__sub-container">
        <Heading className="about__heading" as="h1">
          {title}
        </Heading>
        <ContentContainer className="about__content">
          <ContentContainer className="about__text">
            {parse(body)}
          </ContentContainer>
          <Image className="about__image" alt="img" src={image} />
        </ContentContainer>
      </SubContainer>

      <ContentContainer
        className="about__background"
        backgroundImage={background2}
      />

      <SubContainer key={uniqid()} className="about__sub-container">
        <Heading className="about__heading" as="h1">
          {title2}
        </Heading>
        <ContentContainer className="about__content">
          <Image className="about__image" alt="img" src={image2} />
          <ContentContainer className="about__text-left">
            {parse(body2)}
          </ContentContainer>
        </ContentContainer>
      </SubContainer>
    </ContentContainer>
  );
};

export default UiRender;
