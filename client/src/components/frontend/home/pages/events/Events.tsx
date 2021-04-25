import React from "react";
import "./styles.scss";
import { UiRender } from "./partials";
import { useEventsDataHook } from "~/src/hooks/index";

const Events = (): JSX.Element => {
  const {
    filteredActiveEventsDates,
    filteredDailyEventsData,
    generateHighlhtDates,
    generateDailyEvents,
  } = useEventsDataHook();

  return (
    <UiRender
      generateHighlhtDates={generateHighlhtDates}
      filteredActiveEventsDates={filteredActiveEventsDates}
      generateDailyEvents={generateDailyEvents}
      filteredDailyEventsData={filteredDailyEventsData}
    />
  );
};

export default Events;
