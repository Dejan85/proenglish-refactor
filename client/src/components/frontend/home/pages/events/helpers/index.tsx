import React from "react";
import { SubContainer } from "~/src/components/ui";
import CalendarOfEvents from "./CalendarOfEvents";
import MonthlyEvents from "./MonthlyEvents";
import EventsForToday from "./EventsForToday";
import { UiRenderProps } from "../types";

export const UiRender = (props: UiRenderProps): JSX.Element => {
  const { generateHighlhtDates, filteredActiveEventsDates } = props;

  return (
    <SubContainer>
      <CalendarOfEvents
        generateHighlhtDates={generateHighlhtDates}
        filteredActiveEventsDates={filteredActiveEventsDates}
      />
      <MonthlyEvents filteredActiveEventsDates={filteredActiveEventsDates} />
      <EventsForToday />
    </SubContainer>
  );
};
