import React from "react";
import {
  SubContainer,
  ContentContainer,
  Heading,
  CalendarUi,
  CalendarInfo,
} from "~/src/components/ui";
import { Scrollbars } from "react-custom-scrollbars";
import { filterEventsForCurrentMonth } from "~/src/utils/timeAndDateHandlers";
import { UiRenderTypes } from "../types";

const CalendarOfEvents = (props: UiRenderTypes): JSX.Element => {
  const { filterEventsHandler } = props;
  return (
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
        <CalendarUi filterEventsHandler={filterEventsHandler} />
      </ContentContainer>
    </ContentContainer>
  );
};

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

export const UiRender = (props: UiRenderTypes): JSX.Element => {
  const { eventsData, filterEventsHandler } = props;
  filterEventsForCurrentMonth(eventsData);

  return (
    <SubContainer>
      <CalendarOfEvents filterEventsHandler={filterEventsHandler} />
      <MonthlyEvents />
      <EventsForToday />
    </SubContainer>
  );
};
