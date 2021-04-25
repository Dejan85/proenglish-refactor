import React from "react";
import { ContentContainer, CalendarUi } from "~/src/components/ui";
import { UiRenderProps } from "./types";

const CalendarOfEventsWidget = (props: UiRenderProps): JSX.Element => {
  const { generateHighlhtDates, generateDailyEvents, highlightDates } = props;

  return (
    <>
      <ContentContainer className="home-events__content-container">
        <CalendarUi
          highlightDates={highlightDates}
          generateHighlhtDates={generateHighlhtDates}
          generateDailyEvents={generateDailyEvents}
          inline
        />
      </ContentContainer>
    </>
  );
};

export default CalendarOfEventsWidget;
