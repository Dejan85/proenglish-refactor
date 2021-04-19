import React from "react";
import {
  SubContainer,
  ContentContainer,
  Heading,
  CalendarInfo,
} from "~/src/components/ui";
import { Scrollbars } from "react-custom-scrollbars";
import CalendarOfEvents from "./CalendarOfEvents";
import { UiRenderProps } from "../types";

const MonthlyEvents = (): JSX.Element => {
  return (
    <ContentContainer
      flexDirection="column"
      maxWidth="30rem"
      height="57rem"
      marginTop="10rem"
      position="relative"
    >
      <Heading className="h2" as="h2">
        Mesečni događaji
      </Heading>

      <Scrollbars
        style={{ marginTop: "6.2rem" }}
        renderThumbVertical={() => <div style={{ background: "#474642" }} />}
      >
        <CalendarInfo>
          <CalendarInfo.Card />
          <CalendarInfo.Info />
        </CalendarInfo>
      </Scrollbars>
    </ContentContainer>
  );
};

const EventsForToday = (): JSX.Element => {
  return (
    <ContentContainer
      flexDirection="column"
      maxWidth="40rem"
      height="57rem"
      marginTop="10rem"
    >
      <Heading className="h2" as="h2">
        Događaji za današnji dan
      </Heading>

      <Scrollbars
        style={{ marginTop: "6.2rem" }}
        renderThumbVertical={() => <div style={{ background: "#474642" }} />}
      >
        <CalendarInfo>
          <CalendarInfo.Description />
        </CalendarInfo>
        <CalendarInfo>
          <CalendarInfo.Description />
        </CalendarInfo>
      </Scrollbars>
    </ContentContainer>
  );
};

export const UiRender = (props: UiRenderProps): JSX.Element => {
  const { generateHighlhtDates, filteredActiveEventsDates } = props;

  return (
    <SubContainer>
      <CalendarOfEvents
        generateHighlhtDates={generateHighlhtDates}
        filteredActiveEventsDates={filteredActiveEventsDates}
      />
      <MonthlyEvents />
      <EventsForToday />
    </SubContainer>
  );
};
