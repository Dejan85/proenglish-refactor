import React from "react";
import {
  WrapperWithBackground,
  WelcomeText,
  Text,
  Heading,
  HomeIconsBoxes,
  SubContainer,
} from "~/src/components/ui";
import { firstMsg, secondMsg } from "./messages";

const WelcomePage = (): JSX.Element => {
  return (
    <>
      <WrapperWithBackground>
        <WelcomeText>
          <Heading as="h1" className="welcome-heading">
            {firstMsg}
          </Heading>
          <Text as="p" className="welcome-paragraph">
            {secondMsg}
          </Text>
        </WelcomeText>
      </WrapperWithBackground>
      <SubContainer>
        <HomeIconsBoxes />
      </SubContainer>
    </>
  );
};

export default WelcomePage;
