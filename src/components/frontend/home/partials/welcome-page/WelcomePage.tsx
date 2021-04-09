import React from "react";
import {
  WrapperWithBackground,
  WelcomeText,
  Text,
  Heading,
  HomeIconsBoxes,
} from "~/src/components/ui";
import { firstMsg, secondMsg } from "./messages";

function WelcomePage() {
  return (
    <WrapperWithBackground>
      <WelcomeText>
        <Heading as="h2" text={firstMsg} />
        <Text as="p" text={secondMsg} />
      </WelcomeText>
      <HomeIconsBoxes />
    </WrapperWithBackground>
  );
}

export default WelcomePage;
