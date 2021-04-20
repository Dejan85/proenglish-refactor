import React from "react";
import {
  ContentContainer,
  SubContainer,
  Text,
  Line,
  Heading,
  ExperienceModal,
} from "~/src/components/ui";
import background from "./images/background.jpg";
import { headingText, modalText } from "./messages";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Render = (): JSX.Element => {
  return (
    <ContentContainer
      marginTop="10rem"
      justifyContent="center"
      backgroundImage={background}
    >
      <ContentContainer maxWidth="120rem" flexDirection="column">
        <ContentContainer flexDirection="column" alignItems="center">
          <Heading className="experience-heading" as="h1">
            {headingText}
          </Heading>
          <Line>
            <Line.SmallLine />
            <Line.LargeLine />
          </Line>
        </ContentContainer>
        <ContentContainer flexDirection="column" alignItems="center">
          <ExperienceModal>
            <Text className="experience-text" as="p">
              {modalText}
            </Text>
          </ExperienceModal>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

const Experience = () => <Render />;

export default Experience;
