import React from "react";
import { WrapperWithBackground, WelcomeText, Text } from "~/src/components/ui";
import { firstMsg, secondMsg } from "./messages";

function WelcomePage() {
  return (
    <WrapperWithBackground>
      <WelcomeText>
        <Text as="h1" text={firstMsg} />
        <Text as="p" text={secondMsg} />
      </WelcomeText>
    </WrapperWithBackground>
  );
}

export default WelcomePage;
