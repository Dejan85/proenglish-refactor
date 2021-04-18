import React, { useState, useEffect } from "react";
import { ContentContainer, Heading, CalendarUi } from "~/src/components/ui";
import { filterEventsForCurrentMonth } from "~/src/utils/timeAndDateHandlers";
import { UiRenderTypes } from "../types";

const CalendarOfEvents = (props: UiRenderTypes): JSX.Element => {
  const { eventsData } = props;
  const [highlightDates, setHighlightDates] = useState<Date[]>();

  const generateHighlhtDates = (value = new Date()): void => {
    const filteredEvents = filterEventsForCurrentMonth(eventsData, value);
    const fullYear: number = value.getFullYear();
    const month: number = value.getMonth();
    const highlightDates: Date[] = filteredEvents.map((item) => {
      const { date } = item;
      return new Date(Number(fullYear), month, Number(date.slice(0, 2)));
    });

    setHighlightDates(highlightDates);
  };

  useEffect(() => {
    generateHighlhtDates();
  }, [eventsData]);

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
        />
      </ContentContainer>
    </ContentContainer>
  );
};

export default CalendarOfEvents;
