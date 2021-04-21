import React from "react";
import { ContentContainer, Heading, CalendarUi } from "~/src/components/ui";
import { UiRenderProps } from "../types";

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

      <ContentContainer className="home-events__content-container">
        <CalendarUi
          highlightDates={highlightDates}
          generateHighlhtDates={generateHighlhtDates}
          generateDailyEvents={generateDailyEvents}
        />
      </ContentContainer>
    </ContentContainer>
  );
};

export default CalendarOfEvents;
