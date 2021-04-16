import React from "react";
import {
  SubContainer,
  ContentContainer,
  Heading,
  CalendarUi,
  CalendarCard,
} from "~/src/components/ui";
import { Scrollbars } from "react-custom-scrollbars";

export const UiRender = (): JSX.Element => {
  return (
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
        flexDirection="column"
        maxWidth="30rem"
        height="57rem"
        marginTop="10rem"
        outline="1px solid red"
        position="relative"
      >
        <Heading className="h2" as="h2">
          Mesečni događaji
        </Heading>
        <Scrollbars
          renderThumbVertical={() => <div style={{ background: "#474642" }} />}
        >
          <CalendarCard></CalendarCard>
        </Scrollbars>
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
};
