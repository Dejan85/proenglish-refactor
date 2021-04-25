import React from "react";
import { ContentContainer, CalendarUi } from "~/src/components/ui";
import { UiRenderProps } from "./types";

const CalendarOfEventsWidget = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    generateDailyEvents,
    highlightDates,
    inline,
  } = props;

  return (
    <CalendarUi
      highlightDates={highlightDates}
      generateHighlhtDates={generateHighlhtDates}
      generateDailyEvents={generateDailyEvents}
      inline={inline}
    />
  );
};

export default CalendarOfEventsWidget;
