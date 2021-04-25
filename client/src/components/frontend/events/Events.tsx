import React, { useEffect } from "react";
import RenderUi from "./partials/RenderUi";
import { useEventsDataHook } from "~/src/hooks/index";

const Events = (): JSX.Element => {
  const {
    filteredActiveEventsDates,
    filteredDailyEventsData,
    generateHighlhtDates,
    generateDailyEvents,
  } = useEventsDataHook();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <RenderUi
      generateHighlhtDates={generateHighlhtDates}
      filteredActiveEventsDates={filteredActiveEventsDates}
      generateDailyEvents={generateDailyEvents}
      filteredDailyEventsData={filteredDailyEventsData}
    />
  );
};

export default Events;