import React from "react";
import {
  ContentContainer,
  SubContainer,
  Text,
  Line,
  Heading,
  ExperienceModal,
  CarouselUi,
  Image,
} from "~/src/components/ui";
import background from "./images/background.jpg";
import { headingText, studentsExperiance } from "./messages";
import uniqid from "uniqid";
import { SubStr } from "~/src/utils/SubStr";

const Render = (): JSX.Element => {
  return (
    <ContentContainer
      marginTop="10rem"
      height="87vh"
      justifyContent="center"
      backgroundImage={background}
    >
      <SubContainer className="flex-direction-column justify-content-flex-start">
        <ContentContainer
          marginTop="10rem"
          flexDirection="column"
          alignItems="center"
        >
          <Heading className="experience-heading" as="h1">
            {headingText}
          </Heading>
          <Line>
            <Line.SmallLine />
            <Line.LargeLine />
          </Line>
        </ContentContainer>

        <CarouselUi>
          {studentsExperiance.map((item) => {
            const { exp, name, img } = item;
            return (
              <ContentContainer
                flexDirection="column"
                height="40rem"
                justifyContent="space-between"
              >
                <ContentContainer
                  marginTop="5rem"
                  flexDirection="column"
                  alignItems="center"
                >
                  <ExperienceModal>
                    <Text className="experience-modal-text" as="p">
                      {exp}
                    </Text>
                  </ExperienceModal>
                </ContentContainer>

                <ContentContainer
                  marginTop="5rem"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  height="18rem"
                  key={uniqid()}
                >
                  <ContentContainer width="10rem">
                    <Image className="experience-img" alt="img" src={img} />
                  </ContentContainer>
                  <Text
                    className="experience-modal-name"
                    as="p"
                  >{`${name}`}</Text>
                </ContentContainer>
              </ContentContainer>
            );
          })}
        </CarouselUi>
      </SubContainer>
    </ContentContainer>
  );
};

const Experience = () => <Render />;

export default Experience;
