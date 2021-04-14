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

const MemoizedUi: JSX.Element = (
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

const WelcomePage = (): JSX.Element => MemoizedUi;

export default WelcomePage;
