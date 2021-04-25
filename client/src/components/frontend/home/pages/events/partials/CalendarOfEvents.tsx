import React from "react";
import { ContentContainer, Heading } from "~/src/components/ui";
import { UiRenderProps } from "../types";
import { CalendarOfEventsWidget } from "~/src/widgets/index";

const CalendarOfEvents = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    filteredActiveEventsDates,
    generateDailyEvents,
  } = props;

  const { highlightDates } = filteredActiveEventsDates;

  return (
    <ContentContainer className="home-events__calendar">
      <Heading className="home-events__calendar-heading" as="h2">
        Kalendar događaja
      </Heading>
      <CalendarOfEventsWidget
        highlightDates={highlightDates}
        generateHighlhtDates={generateHighlhtDates}
        generateDailyEvents={generateDailyEvents}
        inline
      />
    </ContentContainer>
  );
};

export default CalendarOfEvents;
