import React from "react";
import { SubContainer } from "~/src/components/ui";
import CalendarOfEvents from "./CalendarOfEvents";
import MonthlyEvents from "./MonthlyEvents";
import EventsForToday from "./EventsForToday";
import { UiRenderProps } from "../types";

export const UiRender = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    filteredActiveEventsDates,
    generateDailyEvents,
  } = props;

  return (
    <SubContainer>
      <CalendarOfEvents
        generateHighlhtDates={generateHighlhtDates}
        filteredActiveEventsDates={filteredActiveEventsDates}
        generateDailyEvents={generateDailyEvents}
      />
      <MonthlyEvents filteredActiveEventsDates={filteredActiveEventsDates} />
      <EventsForToday />
    </SubContainer>
  );
};
