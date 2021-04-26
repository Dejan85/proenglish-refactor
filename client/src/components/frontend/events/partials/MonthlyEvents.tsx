import React, { useState } from "react";
import { ContentContainer, CalendarInfo, Text } from "~/src/components/ui";
import uniqid from "uniqid";
import { MonthlyEventsProps } from "../types";
import { Scheduler } from "~/src/widgets/index";

const MonthlyEvents = (props: MonthlyEventsProps) => {
  const {
    filteredActiveEventsDates: { filteredEvents, highlightDates },
  } = props;
  //   console.log("test", filteredEvents);

  return (
    <ContentContainer className="events__monthly-content">
      <Scheduler events={filteredEvents} />
    </ContentContainer>
  );
};

export default MonthlyEvents;
