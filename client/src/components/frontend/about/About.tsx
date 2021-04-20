import React from "react";
import { ContentContainer, SubContainer } from "~/src/components/ui";
import "./styles.scss";
import background from "./images/background.jpg";

const About = () => {
  return (
    <ContentContainer className="about">
      <ContentContainer
        className="about__background"
        backgroundImage={background}
      />
      <SubContainer></SubContainer>
    </ContentContainer>
  );
};

export default About;
