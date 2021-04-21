import React from "react";
import {
  Text,
  Heading,
  HomeIconsBoxes,
  SubContainer,
  ContentContainer,
} from "~/src/components/ui";
import { firstMsg, secondMsg } from "./messages";
import "./styles.scss";

const MemoizedUi: JSX.Element = (
  <>
    <ContentContainer className="welcome-page">
      <ContentContainer className="welcome-page__text">
        <Heading as="h1" className="welcome-page__heading">
          {firstMsg}
        </Heading>
        <Text as="p" className="welcome-page__paragraph">
          {secondMsg}
        </Text>
      </ContentContainer>
    </ContentContainer>
    <SubContainer>
      <HomeIconsBoxes />
    </SubContainer>
  </>
);

const WelcomePage = (): JSX.Element => MemoizedUi;

export default WelcomePage;
