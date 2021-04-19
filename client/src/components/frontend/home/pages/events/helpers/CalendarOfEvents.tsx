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
