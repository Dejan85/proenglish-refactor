import React from "react";
import { CalendarUi } from "~/src/components/ui";
import { UiRenderProps } from "./types";

const CalendarOfEventsWidget = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    generateDailyEvents,
    highlightDates,
    inline,
    setCurrentMonth,
  } = props;

  return (
    <CalendarUi
      highlightDates={highlightDates}
      generateHighlhtDates={generateHighlhtDates}
      generateDailyEvents={generateDailyEvents}
      inline={inline}
      setCurrentMonth={setCurrentMonth}
    />
  );
};

export default CalendarOfEventsWidget;
