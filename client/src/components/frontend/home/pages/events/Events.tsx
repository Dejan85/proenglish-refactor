import React from "react";
import {
  SubContainer,
  ContentContainer,
  Heading,
  CalendarUi,
} from "~/src/components/ui";

const MemoizedUi: JSX.Element = (
  <SubContainer>
    <ContentContainer
      maxWidth="39rem"
      height="57rem"
      marginTop="10rem"
      flexDirection="column"
      justifyContent="space-between"
      position="relative"
    >
      <Heading className="h2" as="h2">
        Kalendar događaja
      </Heading>

      <ContentContainer position="absolute" top="10rem">
        <CalendarUi />
      </ContentContainer>
    </ContentContainer>

    <ContentContainer
      maxWidth="30rem"
      height="57rem"
      marginTop="10rem"
      outline="1px solid red"
    >
      <Heading className="h2" as="h2">
        Mesečni događaji
      </Heading>
    </ContentContainer>

    <ContentContainer
      maxWidth="40rem"
      height="57rem"
      marginTop="10rem"
      outline="1px solid red"
    >
      <Heading className="h2" as="h2">
        Događaji za današnji dan
      </Heading>
    </ContentContainer>
  </SubContainer>
);

const Events = (): JSX.Element => {
  return MemoizedUi;
};

export default Events;
