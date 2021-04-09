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
          <Heading as="h1" text={firstMsg} />
          <Text as="p" text={secondMsg} className="welcome-paragraph" />
        </WelcomeText>
      </WrapperWithBackground>
      <SubContainer>
        <HomeIconsBoxes />
      </SubContainer>
    </>
  );
};

export default WelcomePage;
